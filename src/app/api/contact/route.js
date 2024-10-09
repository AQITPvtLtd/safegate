import pool from "@/helper/db"; // Assuming `db.js` is using `mysql2/promise`
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    const unique_id = uuid();

    console.log({ name, email, message });

    // Use pool.query with async/await for promises
    const [results] = await pool.query(
      "INSERT INTO contact(id, name, email, message) VALUES (?,?,?,?)",
      [unique_id, name, email, message]
    );

    // Send email using nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: 'New Contact Message', // Add your email details here
      text: `You received a new message from ${name} (${email}):\n\n${message}`
    };

    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({
      message: "Message Sent",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Failed to send query",
      success: false,
    });
  }
}
