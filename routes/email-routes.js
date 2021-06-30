const { Router } = require("express");
const controllers = require("../controllers/email-controllers");

const emailRouter = Router();

emailRouter.post("/email", controllers.sendEmail);

module.exports = emailRouter;
