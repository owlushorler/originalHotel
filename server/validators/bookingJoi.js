const joi = require("joi")

const bookingJoi = joi.object({
    fullName: joi.string().required(),
    email: joi.string().required(),
    checkInDate: joi.date().required(),
    checkOutDate: joi.date().required(),
    room: joi.string().required(),
    totalDays: joi.number().required(),
    price: joi.number().required(),
    totalAmount: joi.number().required(),
    roomId: joi.string().required(),    
})

module.exports = bookingJoi