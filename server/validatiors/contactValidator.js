/**
 * @type {ObjectSchema}
 */
import Joi from '@hapi/joi';
// const Joi = require('joi');

module.exports = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).max(20).required(),
        email: Joi.string().email().max(30).required(),
        phone: Joi.number().positive().required(),
        message: Joi.string().min(10).max(300).required()
    });
    return schema.validate(data);
};
