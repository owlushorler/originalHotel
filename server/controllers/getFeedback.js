const http = require("http-status-codes")
const feedback = require("../models/formSchema")

const getFeedbacks = async (req, res)=>{
    try {
        const view = await feedback.find({})
        if(!view) return res.status(http.StatusCodes.EXPECTATION_FAILED).send("Error loading data")
        res.status(http.StatusCodes.OK).json(view)
    } catch (error) {
        console.error(error)
        return res.status(http.StatusCodes.EXPECTATION_FAILED).send(error.message)
    }
}

module.exports = getFeedbacks