const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()

const app = express();
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())



const uri = process.env.URI 
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true})
const connection = mongoose.connection
connection.once('open', () => {
    console.log("Connected to Mongo")
})








app.listen(port, () =>{
    console.log("Server running at: http://localhost:" + port)
})
