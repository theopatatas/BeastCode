import { appendFile, mkdir } from "node:fs/promises";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import path from "node:path";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  const firstName = body.firstName?.trim();
  const lastName = body.lastName?.trim();
  const email = body.email?.trim();
  const subject = body.subject?.trim();
  const message = body.message?.trim();

  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json(
      { message: "Please complete all fields before sending." },
      { status: 400 },
    );
  }

  const payload = {
    firstName,
    lastName,
    email,
    subject,
    message,
    submittedAt: new Date().toISOString(),
  };

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || "465");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const contactTo = process.env.CONTACT_TO || "ocampojetheo22@gmail.com";
  const contactFrom = process.env.CONTACT_FROM || smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass || !contactFrom) {
    return NextResponse.json(
      {
        message:
          "Email sending is not configured yet. Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_FROM to your environment.",
      },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: contactFrom,
    to: contactTo,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      "",
      message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h2 style="margin-bottom: 16px;">New portfolio contact message</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      </div>
    `,
  });

  const outputDir = path.join(process.cwd(), ".tmp");
  const outputFile = path.join(outputDir, "contact-submissions.jsonl");

  await mkdir(outputDir, { recursive: true });
  await appendFile(outputFile, `${JSON.stringify(payload)}\n`, "utf8");

  return NextResponse.json({
    message: "Message sent successfully.",
  });
}
