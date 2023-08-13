const mongoose = require("mongoose")

const roomSchema = mongoose.Schema({
    type: {
        type: String,
        require: true,
    },
    features: {
        type: Array,
        require: true,
    },
    images: [String]
})

const room = mongoose.model("room", roomSchema)

module.exports = room