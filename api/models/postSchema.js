import Joi from "joi";

export const postSchema = Joi.object({
  user_id: Joi.string().email().required(),
  title:Joi.string(),
  description:Joi.string()
})