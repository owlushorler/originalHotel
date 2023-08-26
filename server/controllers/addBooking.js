const http = require("http-status-codes")
const bookingJoi = require("../validators/bookingJoi")
const check = require("../models/check")
const room = require("../models/roomSchema")



const addBooking = async (req, res) =>{
    // console.log(req.body)
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
        console.log(value)
        // console.log(value.image.path)
        console.log(Booking)
        if(!Booking) return res.status(http.StatusCodes.BAD_REQUEST).json("couldn't create employee")
        try {
            console.log()
            const rep = await room.findOneAndUpdate({roomID:value.roomId}, {$set:{availability:false}})
            console.log(rep)
        } catch (error) {
             console.log(error)
            return res.status(http.StatusCodes.BAD_REQUEST).json(error.message)
        }

        res.status(http.StatusCodes.CREATED).json("Room Reserved Successfully")
    } catch (error) {
        if (error.code === 11000) {
            const errorMessage = `A check-in with a null value already exists.`;
            // Handle the error or display the error message to the user
            return res.status(http.StatusCodes.BAD_REQUEST).json(errorMessage)
        }
        return res.status(http.StatusCodes.BAD_REQUEST).json(error.message)
        // console.log(error)
    }
}

module.exports = addBooking