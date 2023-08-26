const http = require("http-status-codes")
const bookingJoi = require("../validators/bookingJoi")
const check = require("../models/check")



const addBooking = async (req, res) =>{
    console.log(req.body)
    const {error, value} = bookingJoi.validate(req.body)
    if(error) return res.status(http.StatusCodes.BAD_REQUEST).json(error.message)
    try {
        const Booking = await check.create({
            fullName: value.fullName,
            email: value.email,
            checkInDate: value.checkInDate,
            checkOutDate: value.checkOutDate,
            room: value.room,
            totalDays: value.totalDays,
            price: value.price,
            totalAmount: value.totalAmount,
            roomId: value.roomId,
            createdAt: Date()
        })
        // console.log(value.image.path)
        // console.log(Employee)
        if(!Employee) return res.status(http.StatusCodes.BAD_REQUEST).json("couldn't create employee")
        res.status(http.StatusCodes.CREATED).json("Employee profile created")
    } catch (error) {
        // console.log(error)
        return res.status(http.StatusCodes.BAD_REQUEST).json(error.message)
    }
}

module.exports = addBooking