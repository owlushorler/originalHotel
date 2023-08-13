const joi = require("joi")

const employeeJoi = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    department: joi.string().required(),
    age: joi.string().required()
})

module.exports = employeeJoi