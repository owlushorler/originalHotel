
 const bcrypt = require('bcrypt');
 const User = require('../models/adminSchema');
 const Schema = require('../validators/joi_validator');
 const jwt = require('jsonwebtoken')

 const secretKey = process.env.secretKey

  //controller logic
  const loginAdmin = async (req, res) => {
    console.log(req.body)
  const { error, value } = Schema.validate(req.body);
  if(error) return res.status(500).send(error.message)
    try {
        const user = await User.findOne({ username: value.username })
         if (!user) {
            return res.status(401).json({ error: 'Credentials invalid'});
         }
         console.log(user)
       const isPasswordValid = await bcrypt.compare(value.password, user.password);
         console.log(isPasswordValid)
        if (!isPasswordValid) {
             return res.status(401).json({ error: 'Invalid credentials' });
        }else{
              const token = jwt.sign(value.username, secretKey)
              if (!token) console.log("invalid token")
              if (user.authentication == "Super Admin"){
                return res.status(200).json({user: SuperAdmin})
              }else{
                req.user = token
                return res.status(200).json({ message: 'Admin login successful' });
                
              }
        }
      } catch (error) {
             console.error('Error during admin login:', error);
             res.status(500).json({ error: 'Server error'});
         }
     };

     module.exports = loginAdmin