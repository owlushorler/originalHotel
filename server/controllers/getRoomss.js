const http = require("http-status-codes")
const room = require("../models/roomSchema")


const getRoomss= async (req, res)=>{
    console.log(req.params.room)
    const check = req.params.room
    try {
        const view = await room.findOne({name: check})
        console.log(view)
        if(!view) return res.status(http.StatusCodes.EXPECTATION_FAILED).json("Error loading data")
        res.status(http.StatusCodes.OK).json(view)

    } catch (error) {
        console.error(error)
        return res.status(http.StatusCodes.EXPECTATION_FAILED).json(error.message)
    }
}

module.exports = getRoomss