
const mongoose = require("mongoose")

const checkin = mongoose.Schema({
    checkin: {
        type: "string",
      
      },
      checkout: {
        type: "string",
        
      },
      price: {
        type: "string",
        
      },
  
     
})

const check = mongoose.model("checkin", checkin)

module.exports = check