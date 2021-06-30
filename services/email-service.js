const sgMail = require("@sendgrid/mail");
const Mailgen = require("mailgen");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const mailGenerator = new Mailgen({
  theme: "salted",
  product: {
    name: process.env.PRODUCT_NAME,
    link: process.env.ANNA_PHOTOGRAPHY_LINK,
  },
});

function createEmailBody({ name, email, message, date, photo, video }) {
  const emailBody = {
    body: {
      name: process.env.FEEDBACK_RECIPIENT_NAME,
      intro: "Here is a new request:",
      table: {
        data: [
          {
            what: "Name",
            description: name,
          },
          {
            what: "Reply to",
            description: email,
          },
          {
            what: "Message",
            description: message,
          },
          {
            what: "Date",
            description: date,
          },
          {
            what: "Services",
            description: `${photo ? "Photo" : ""} ${video ? "Video" : ""}`,
          },
        ],
      },
      outro: "Anna, you are awesome! Let's make some people happy!",
    },
  };

  return mailGenerator.generate(emailBody);
}

async function sendEmail(emailBody) {
  try {
    const msg = {
      to: process.env.FEEDBACK_RECIPIENT_EMAIL,
      from: `${process.env.SENDGRID_SENDER_NAME} <${process.env.SENDGRID_SENDER}>`,
      subject: process.env.FEEDBACK_EMAIL_SUBJECT,
      html: emailBody,
    };

    await sgMail.send(msg);

    console.log("Email sent");
  } catch (error) {
    console.log("Error in sendEmail: ", error);
  }
}

module.exports = { createEmailBody, sendEmail };
