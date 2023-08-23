const data = require("../models/check")


function Pay (req,res){
    const {checkin,checkout,price} = req.body
    const mana = new data({
        checkin, checkout , price
    })

    mana.save()
  
    console.log(mana)
}

function   last(req,res){
   const yoo= data.find()
   res.status(200).json 

}



module.exports = {Pay, last}