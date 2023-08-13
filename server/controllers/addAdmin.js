const http = require("http-status-codes")
const adminJoi = require("../validators/adminJoi")
const admin = require("../models/adminSchema")
const bcrypt = require("bcrypt")


const addAdmin = async (req, res) =>{
    console.log(req.body)
    const {error, value} = adminJoi.validate(req.body)
    if(error) return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
    try {
        const password = `sr${Math.floor(Math.random()*2000)}bfx${Math.floor(Math.random()*2000)}`
        console.log(password)
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)
        console.log(hashedPassword)
        const Admin = await admin.create({
            email: value.email,
            firstName: value.firstName,
            lastName: value.lastName,
            username: value.username,
            password: hashedPassword
        })
        if(!Admin) return res.status(http.StatusCodes.BAD_REQUEST).send("couldn't create admin")
        console.log(Admin)
        res.status(http.StatusCodes.CREATED).send(Admin)
    } catch (error) {
        console.log(error)
        return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
    }
}

module.exports = addAdmin