import Joi from '@hapi/joi';

export const loginValidationSchema = Joi.object({
    login: Joi.string().required(),

    password: Joi.string().required(),

    id: Joi.string()
});
