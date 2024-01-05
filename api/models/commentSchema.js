import Joi from "joi";

export const commentSchema = Joi.object({
  post_id: Joi.string().required(),
  user_id: Joi.string().required(),
  description: Joi.string().min(1).required()
});