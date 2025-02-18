import pool from "@/helper/db";
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const location = formData.get("location");
    const message = formData.get("message");
    const medicalReport = formData.get("medicalReport"); // File handling needed

    const unique_id = uuid();
    let connection = await pool.getConnection();

    // Extract file details
    let fileName = null;
    let fileBuffer = null;
    let fileMimeType = null;

    if (medicalReport && medicalReport.size > 0) {
      fileName = medicalReport.name;
      fileBuffer = Buffer.from(await medicalReport.arrayBuffer()); // Convert file to buffer
      fileMimeType = medicalReport.type; // Get file MIME type
    }

    // Insert into `contact` table
    await connection.query(
      "INSERT INTO contact (id, date, name, email, phone, location, message, medicalReport) VALUES (?, NOW(), ?, ?, ?, ?, ?, ?)",
      [unique_id, name, email, phone, location, message, fileName]
    );

    connection.release();

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    // Admin Notification Email
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: "New Query Received",
      html: `<html>
              <body>
                <h3>New query from ${name} (📧 ${email}, 📞 ${phone})</h3>
                <p><strong>Location:</strong> ${location}</p>
                <p><strong>Message:</strong> ${message}</p>
                ${fileName ? `<p><strong>Medical Report Attached:</strong> ${fileName}</p>` : ""}
              </body>
            </html>`,
      attachments: fileBuffer
        ? [
          {
            filename: fileName,
            content: fileBuffer,
            contentType: fileMimeType,
          },
        ]
        : [],
    });

    // Auto-reply to User
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: email,
      subject: "Thank You for Contacting Us!",
      html: `<html>
              <body>
                <h2>Dear ${name},</h2>
                <p>Thank you for reaching out. Our team will get back to you soon.</p>
              </body>
            </html>`,
    });

    return NextResponse.json({ message: "Message Sent", success: true });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json({ message: "Failed to send query", success: false });
  }
}
