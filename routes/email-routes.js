const { Router } = require("express");
const { validationRequest } = require("../middleware/valigation");
const controllers = require("../controllers/email-controllers");

const emailRouter = Router();

emailRouter.post("/email", validationRequest, controllers.sendEmail);

module.exports = emailRouter;
