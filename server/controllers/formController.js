 const feedback = require('../models/formSchema');

 const submitForm = async (req,res) => {
    try {
     console.log(req.body)
          const{ name,email,subject,message} = req.body;

          const newMessage = new feedback({
              name,
              email,
              subject,
              message,
              createdAt: Date()
          });

           await newMessage.save();

            res.status(201).json({message: 'Form submitted successfully'});
      } catch (error) {
           console.log(error); 
           res.status(500).json({ message: 'An error occurred while form is being submitting'});

      }
 };

 module.exports = submitForm