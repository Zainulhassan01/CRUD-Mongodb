const Joi = require('joi')

const userSchema = Joi.object({
    firstName: Joi.string()
        .required(),

    city: Joi.string()
})

module.exports = userSchema