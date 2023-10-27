import Joi from 'joi';

export const signUpSchema = Joi.object({

    name: Joi.string().min(5).max(20).required(),
    email: Joi.string().email().required(),
    matricNo: Joi.string().required(),
    password: Joi.string().min(6).required(),

})