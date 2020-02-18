/**
 * @type {ObjectSchema}
 */
import Joi from '@hapi/joi';
// const Joi = require('joi');

module.exports = (data) => {
    const pattern = new RegExp("^(http(s)?:\\/\\/)?((w){3}.)?youtu(be|.be)?(\\.com)?\\/.+");
    const schema = Joi.object({
        id: Joi.optional(),
        title: Joi.string().min(3).max(20).required(),
        description: Joi.string().min(10).max(300).required(),
        trailerVideoUrl: Joi.string().regex(pattern),
        releaseYear: Joi.number().positive().required().max(2022).min(1800),
        director: Joi.string().min(3).max(20).required(),
        genres: Joi.array().optional(),
        cast: Joi.array().optional(),
    });
    return schema.validate(data);
};
