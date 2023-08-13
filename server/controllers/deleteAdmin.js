const http = require("http-status-codes");

const updateAdmin = (req, res)=>{
    const {error, value} = updateAdminJoi.validate(req.body)
    if(error) return res.status(http.StatusCodes.EXPECTATION_FAILED).send(error.message)
}
