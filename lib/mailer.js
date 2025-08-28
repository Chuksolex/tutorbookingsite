import nodemailer from 'nodemailer';

export default async function sendMail({ to, subject, html }) {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or use SMTP config
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
  });
}
