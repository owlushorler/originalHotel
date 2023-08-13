const http = require("http-status-codes");
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
      console.log(value.username)
        const user = await User.findOne({ username: value.username })
        console.log(user)
         if (!user) {
            return res.status(401).json({ error: 'Credentials invalid'});
         }else{
           if(user.authentication === "Super Admin"){
              if(user.password == value.password){
                return res.status(http.StatusCodes.OK).json(user.authentication)
              }else{return res.status(http.StatusCodes.UNAUTHORIZED).json({error: "Invalid Credentials"})}
           }else{
             const isPasswordValid = await bcrypt.compare(value.password, user.password);
               console.log(isPasswordValid)
              if (!isPasswordValid) {
                   return res.status(401).json({ error: 'Invalid credentials' });
              }else{
                    const token = jwt.sign(value.username, secretKey)
                    if (!token){
                       console.log("invalid token")
                    }else{
                      res.cookie("jwt", token, {
                        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 10 ),
                        secure: false,
                        httpOnly: true
                      })
                      req.user = token
                      return res.status(200).json('Admin login successful' );
                    }
              }
           }

         }
      } catch (error) {
             console.error('Error during admin login:', error);
             res.status(500).json({ error: 'Server error'});
         }
     };

     module.exports = loginAdmin