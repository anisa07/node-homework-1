import Joi from '@hapi/joi';

export const groupValidationSchema = Joi.object({
    name: Joi.string()
        .required(),

    permissions: Joi.array().items(
        Joi.string().required().valid('READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES')
    ),

    id: Joi.string()
});
