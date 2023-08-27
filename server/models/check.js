
const mongoose = require("mongoose")

const checkinSchema = mongoose.Schema({
fullName:{
  type:String,
},
email:{
  type:String,
},
price:{
  type:Number,
},
checkInDate: {
  type: String,
},
checkOutDate: {
  type: String,   
},
      room:{
        type:String || Array
      },
      roomID:{
        type:String
      },
      totalDays:{
        type:Number
      },
      totalAmount:{
        type:Number
      },
      createdAt: {
        type: String
      }
     
})

const check = mongoose.model("checkin", checkinSchema)

module.exports = check