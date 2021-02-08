const Joi = require("joi"); // using @hapi/joi to validate user input

// validate users info
const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    confirm_password: Joi.string().min(6).max(1024).required()
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
    productName: Joi.string().required(),

    description: Joi.string().required(),
    category: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.string().required(),
    salesPrice: Joi.string().required(),
    discount: Joi.string().required(),
    slug: Joi.string().required()
  });
  return Schema.validate(data);
};

module.exports = {
  registerValidation, LoginValidation, PostProduct
};
