const Joi = require("joi");
const { HttpCodes } = require("../helpers/constants");

const validateRequest = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  email: Joi.string().email().required(),
  message: Joi.string().min(2).required(),
  date: Joi.string().optional(),
  photo: Joi.boolean().optional(),
  video: Joi.boolean().optional(),
});

const validate = async (schema, request, next) => {
  try {
    await schema.validateAsync(request);
    next();
  } catch (error) {
    next({
      status: HttpCodes.BAD_REQUEST,
      message: error.message.replace(/"/g, ""),
    });
  }
};

module.exports = {
  validationRequest: (req, res, next) => {
    return validate(validateRequest, req.body, next);
  },
};
