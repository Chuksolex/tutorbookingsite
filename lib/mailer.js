// import nodemailer from "nodemailer";


// // Create a transporter object
// const createMailTransporter = async () => {
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465, // STARTTLS port
//     secure: true, // false for TLS, true for SSL (465)
//     auth: {
//       user: process.env.GMAIL_ACCOUNT,
//       pass: process.env.GMAIL_APP_PASSWORD, // match your .env name exactly
//     },
//   });

//   return transporter;
// };

// export default createMailTransporter;

import nodemailer from "nodemailer";

// Create a transporter object
const createMailTransporter = async () => {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com", // Zoho SMTP server
    port: 465, // Use 465 for SSL
    secure: true, // true = SSL
    auth: {
      user: process.env.PROFESSIONAL_EMAIL, // your full Zoho email, e.g., hello@prettygigs.ng
      pass: process.env.ZOHO_MAILER_APP_PASSWORD, // generated from Zoho
    },
  });

  return transporter;
};

export default createMailTransporter;
