const express = require('express')
const app = express()
const path = require('path');
var fs = require('fs');
const Router = require('./Router')
const mongoose  = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
app.use(express.json())

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, '/uploads')));
//var url = "mongodb://localhost:27017/nrblog";

mongoose.connect(process.env.MONGO_REMOTE, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{

    if (err) throw err;
    	console.log("Connected to database")
})

app.use('/api/v1', Router)

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server started ${PORT}`)
})