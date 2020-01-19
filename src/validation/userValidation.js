import Joi from '@hapi/joi';

export const userValidationSchema = Joi.object({
    login: Joi.string()
        .required(),

    password: Joi.string()
        .alphanum()
        .required(),

    age: Joi.number()
        .min(4)
        .max(130)
        .required(),

    isDeleted: Joi.boolean()
        .required(),

    id: Joi.string()
});
