const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail() {
  try {
    const msg = {
      to: process.env.FEEDBACK_RECIPIENT,
      from: `${process.env.SENDGRID_SENDER_NAME} <${process.env.SENDGRID_SENDER}>`,
      subject: "You've got main from Anna Photography",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };

    await sgMail.send(msg);

    console.log("Email sent");
  } catch (error) {
    console.log("Error in sendEmail: ", error);
  }
}

module.exports = { sendEmail };
