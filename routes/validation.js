const Joi = require("@hapi/joi");

//register validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(0).required(),
    position: Joi.string().min(0).required(),
    email: Joi.string().min(0).email().required(),
    password: Joi.string().min(0).required(),
  });
  return schema.validate(data);
};

//login validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(0).email().required(),
    password: Joi.string().min(0).required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
