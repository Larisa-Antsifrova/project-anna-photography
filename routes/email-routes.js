const { Router } = require("express");
const rateLimit = require("express-rate-limit");
const { HttpCodes } = require("../helpers/constants");
const { validationRequest } = require("../middleware/valigation");
const controllers = require("../controllers/email-controllers");
require("dotenv").config();

const apiLimiter = rateLimit({
  windowMs: process.env.RATE_LIMIT_TIME,
  max: process.env.RATE_LIMIT_REQUESTS,
  handler: (req, res, next) => {
    return res.status(HttpCodes.TOO_MANY_REQUESTS).json({
      message: "Too many requrests made. Please try again later.",
    });
  },
});

const emailRouter = Router();

emailRouter.post(
  "/email",
  apiLimiter,
  validationRequest,
  controllers.sendEmail,
);

module.exports = emailRouter;
