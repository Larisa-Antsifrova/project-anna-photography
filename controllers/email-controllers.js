const EmailService = require("../services/email-service");

const sendEmail = async (req, res, next) => {
  try {
    const { email } = req.body;

    await EmailService.sendEmail(email);

    return res.json({ message: "Email sent" });
  } catch (error) {
    next(error);
  }
};

module.exports = { sendEmail };
