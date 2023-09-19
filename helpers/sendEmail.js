const nodemailer = require("nodemailer");
require("dotenv").config();

const META_PASSWORD = process.env.META_PASSWORD;

const nodemailerConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "kushnirroman22@gmail.com",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

async function sendEmail(mailOptions) {
  const email = await transport.sendMail(mailOptions);
  console.log("Email send success", email.messageId);
}
sendEmail().catch(console.error);

module.exports = sendEmail;
