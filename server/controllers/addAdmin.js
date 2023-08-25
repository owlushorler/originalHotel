const http = require("http-status-codes")
const adminJoi = require("../validators/adminJoi")
const admin = require("../models/adminSchema")
//const bcrypt = require("bcrypt")


const addAdmin = async (req, res, next) =>{
    console.log(req.body)
    const {error, value} = adminJoi.validate(req.body)
    if(error) return res.status(http.StatusCodes.BAD_REQUEST).json(error.message)
    try {
        const password = `sr${Math.floor(Math.random()*2000)}bfx${Math.floor(Math.random()*2000)}`
        const username = `Admin`
        console.log(password)
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)
        console.log(hashedPassword)
        const Admin = await admin.create({
            email: value.email,
            firstName: value.firstName,
            lastName: value.lastName,
            username: username,
            password: hashedPassword
        })
        if(!Admin) return res.status(http.StatusCodes.BAD_REQUEST).json("couldn't create admin")
        console.log(Admin)
        req.password = password
        req.name = value.firstName
        req.email = value.email
        console.log(req.password, req.name)
        // res.status(http.StatusCodes.CREATED).send(Admin)

        next()
    } catch (error) {
        if (error.code === 11000 && error.keyPattern.email === 1) {
            // Duplicate email error
            const duplicateEmail = error.keyValue.email;
            const errorMessage = `The email ${duplicateEmail} is already in use.`;
            return res.status(http.StatusCodes.BAD_REQUEST).json(errorMessage)
        }else{
            return res.status(http.StatusCodes.BAD_REQUEST).json(error.message)
            console.log(error.message)
        }
    }
}

module.exports = addAdmin