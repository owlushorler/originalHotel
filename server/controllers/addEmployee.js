const http = require("http-status-codes")
const employeeJoi = require("../validators/employeeJoi")
const employee = require("../models/employeeSchema")



const addEmployee = async (req, res) =>{
    console.log(req.body)
    console.log(req.file)
    const {error, value} = employeeJoi.validate(req.body)
    if(error) return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
    try {
        const Employee = await employee.create({
            firstName: value.firstName,
            lastName: value.lastName,
            department: value.department,
            age: value.age,
            image: req.file.path,
            createdAt: Date()
        })
        // console.log(value.image.path)
        // console.log(Employee)
        if(!Employee) return res.status(http.StatusCodes.BAD_REQUEST).send("couldn't create employee")
        res.status(http.StatusCodes.CREATED).send("Employee profile created")
    } catch (error) {
        // console.log(error)
        return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
    }
}

module.exports = addEmployee