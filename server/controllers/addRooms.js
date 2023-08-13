const http = require("http-status-codes")
const roomJoi = require("../validators/roomJoi")
const room = require("../models/roomSchema")



const addRoom = async (req, res) =>{
    console.log(req.body)
    console.log(req.files)
    const {error, value} = roomJoi.validate(req.body)
    if(error) return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
    try {
        const files = req.files
        const Room = await room.create({
            type: value.type,
            features: value.features,
            images: (files.map((file)=>{
                file.path
            }))
        })
        console.log(Room)
        if(!Room) return res.status(http.StatusCodes.BAD_REQUEST).send("Error adding room")
        res.status(http.StatusCodes.CREATED).send("Room successfully added")
    } catch (error) {
        console.log(error)
        return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
    }
}

module.exports = addRoom