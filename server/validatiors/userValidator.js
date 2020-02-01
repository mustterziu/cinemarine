/**
 * @type {ObjectSchema}
 */
import Joi from '@hapi/joi';
// const Joi = require('joi');
export class UserValidator {
    static validateRegistration = data => {
        const schema = Joi.object({
            username: Joi.string().min(6).required(),
            email: Joi.string().min(6).required().email(),
            password: Joi.string().min(8).required()
        });
        return schema.validate(data);
    };

    static validateLogin = data => {
        const schema = Joi.object({
            username: Joi.string().min(6).required(),
            password: Joi.string().min(8).required()
        });
        return schema.validate(data);
    };
}
