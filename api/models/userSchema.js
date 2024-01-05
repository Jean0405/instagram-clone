import Joi from "joi";

export const userSchema = Joi.object({
  email: Joi.string().email().required(),
  full_name: Joi.string().max(70).required(),
  username: Joi.string().alphanum().required(),
  password: Joi.string().required()
})