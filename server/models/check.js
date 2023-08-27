
const mongoose = require("mongoose")

const checkin = mongoose.Schema({
  
fullName:{
  type:String,

},
email:{
  type:String,
   
},
price:{
  type:String,
  
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
        type:String
      },
      totalAmount:{
        type:String
      },
      createdAt: {
        type: String
      }
      
    
  
     
})

const check = mongoose.model("checkin", checkin)

module.exports = check