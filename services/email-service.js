const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendEmail(email) {
  try {
    const config = {
      host: process.env.NODEMAILER_HOST,
      port: process.env.NODEMAILER_PORT,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_SENDER,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    };

    const transporter = nodemailer.createTransport(config);

    return await transporter.sendMail({
      from: `Anna Photography <${process.env.NODEMAILER_SENDER}>`,
      to: email,
      subject: "You have got mail from Anna Photography",
      html: "<b>Anna Photography</b>",
    });
  } catch (error) {
    console.log(error.message);
  }
}
module.exports = { sendEmail };
