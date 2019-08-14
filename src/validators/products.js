const Joi = require('joi');

module.exports = {
    query: Joi.object()
        .required()
        .keys({
            q: Joi.string().required()
        })
};
