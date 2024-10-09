import pool from "@/helper/db"; // Assuming `db.js` is using `mysql2/promise`
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    const unique_id = uuid();
    let connection;
    connection = await pool.getConnection();
    // Use pool.query with async/await for promises
    const [results] = await connection.query(
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
      subject: "New Query Received", // Add your email details here
      html: `<html lang="en">
      <head>
        <meta charset="utf-8">

        <title>Safegate Contact Form</title>
        <meta name="description" content="Safegate Enquiry Form">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"></div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${name}, their email is: ✉️${email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${message}</p>
              <br>
              </div>
              </div>
      </body>
      </html>`,
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: email,
      subject: "Thank You for contacting Safegate!",
      html: `<html>
              <body>
                <h2>Hey ${name},</h2>
                <p>Your query is noted! Our team will contact you as soon as possible.</p>
              </body>
             </html>`,
    });
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
