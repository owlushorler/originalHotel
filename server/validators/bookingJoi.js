const joi = require("joi")

const bookingJoi = joi.object({
    fullName: joi.string().required(),
    email: joi.string().required(),
    checkInDate: joi.date().required(),
    checkOutDate: joi.date().required(),
    room: joi.string().required(),
    totalDays: joi.string().required(),
    price: joi.string().required(),
    totalAmount: joi.string().required(),
    roomId: joi.string().required(),
    createdAt: joi.string().required()
})

module.exports = bookingJoi