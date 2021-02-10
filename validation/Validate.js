const Joi = require("joi"); // using @hapi/joi to validate user input

// validate users info
const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    confirmPassword: Joi.string().min(6).max(1024).required(),
    telephone: Joi.number().min(11).max(11).required().email()
  });
  return schema.validate(data);
};
// validate login details info
const LoginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
  });
  return schema.validate(data);
};

const PostProduct = (data) => {
  const Schema = Joi.object({
    productName: Joi.string().min(10).required(),

    description: Joi.string().min(10).required(),
    category: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.number().required(),
    salesPrice: Joi.number().required(),
    discount: Joi.number().required(),
    slug: Joi.string().required()
  });
  return Schema.validate(data);
};

module.exports = {
  registerValidation, LoginValidation, PostProduct
};
