const emailCollection = require('../models/emailCollectionSchema');


const emailSubscription = async(req,res) => {
    const {email} = req.body;

    try{
        const subscription = await emailCollection.create({email});
         res.status(201).json({message: 'Subscription successful',subscription});
} catch (error) {
    if (error.code === 11000) {
        res.status(400).json({message: 'Email already subscribed'});
    } else {
        res.status(500).json({message: 'An error occurred while subscribing'});
    }
   }
};
 module.exports = emailSubscription