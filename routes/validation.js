const Joi = require("@hapi/joi");

//register validation
const registerValidation = (data) => {
  const schema = Joi.object({
    firstname: Joi.string().min(6).required(),
    lastname: Joi.string().min(6).required(),
    phone: Joi.string().min(7).required(),
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

//login validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
