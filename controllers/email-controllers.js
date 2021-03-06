const EmailService = require("../services/email-service");

const sendEmail = async (req, res, next) => {
  try {
    const emailBody = EmailService.createEmailBody(req.body);

    await EmailService.sendEmail(emailBody);

    return res.json({ message: "Email sent" });
  } catch (error) {
    next(error);
  }
};

module.exports = { sendEmail };
