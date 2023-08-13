const joi = require("joi")

const roomJoi = joi.object({
    type: joi.string().required(),
    features: joi.array().required(),
    images: joi.array().required(),
})

module.exports = roomJoi