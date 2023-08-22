const mongoose = require('mongoose');
 

const emailSchema = new mongoose.Schema({

 email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },

 
});
  const emailSubscription = mongoose.model('emailSubscription',emailSchema);
  module.exports = emailSubscription