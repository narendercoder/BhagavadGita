const nodeMailer = require("nodemailer");
const {
  SMPT_HOST,
  SMPT_PORT,
  SMPT_SERVICES,
  SMPT_MAIL,
  SMPT_PASSWORD,
} = require("../config/keys");

const sendEmail = async (options) => {
  // Create a nodemailer transporter with the provided SMTP configuration
  const transporter = nodeMailer.createTransport({
    host: SMPT_HOST,
    port: SMPT_PORT,
    service: SMPT_SERVICES,
    auth: {
      user: SMPT_MAIL,
      pass: SMPT_PASSWORD,
    },
  });

  // Define email options, including sender, recipient, subject, and message content
  const mailOptions = {
    from: SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    html: options.message_Content,
  };
  
  // Send the email using the transporter
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;