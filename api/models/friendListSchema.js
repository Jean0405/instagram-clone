import Joi from "joi";

export const friendListSchema = Joi.object({
  user_id: Joi.string().required(),
  friend_id: Joi.string().required(),
});