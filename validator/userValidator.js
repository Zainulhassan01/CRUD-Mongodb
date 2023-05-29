const Joi = require('joi')

const userSchema = Joi.object({
    firstName: Joi.string()
        .required(),

    city: Joi.string()
}).required()

module.exports = userSchema