const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const route = require('./routes/routes')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors({
    origin: "*"
}))
app.use(route)

const uri = process.env.uri
const port = process.env.port

app.listen(port, ()=>{
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("mongo connected")
    }).catch((error) => {
        console.log(error.message)
    })
    console.log(`Server listening on ${port}`)
})
