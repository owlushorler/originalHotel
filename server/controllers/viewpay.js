const data = require("../models/check")


 async function pay  (req,res){
    //if(!fullName, !email || !price || !checkin || !checkout || !TypeOfroom || !roomID || !features || !capacity){
      //  res.status(404).json({msg:"all the field must be filled"})
  //  }

   try{
    //const {fullName,email,price,checkInDate,checkOutDate,type,roomID,features,createdAt, totalDays } = req.body
        const {fullName,email,price,checkInDate,checkOutDate,room, roomID,totalDays,totalAmount, createdAt}=req.body
   const man = new data({
    fullName,
    email:"dd",
    price,
    checkInDate,
    checkOutDate,
    room,
    roomID,
    totalDays,
    totalAmount,
   createdAt: Date()
  })
   res.status(200).json({msg:"your paymeny is being  process"})
  // man.save()
  console.log(man)
  console.log("kol")
}catch(e){
    console.log(e)
}
    


    
}




module.exports = pay