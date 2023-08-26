const http = require("http-status-codes")
const check = require("../models/check")


const getBookings = async (req, res)=>{
    try {
        const view = await check.find({})
        if(!view) return res.status(http.StatusCodes.EXPECTATION_FAILED).send("Error loading data")
        res.status(http.StatusCodes.OK).json(view)
    } catch (error) {
        console.error(error)
        return res.status(http.StatusCodes.EXPECTATION_FAILED).send(error.message)
    }
}

module.exports = getBookings