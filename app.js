const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const signup = require('./routes/signup');
const login = require('./routes/login');
const logout = require('./routes/logout');
const auth = require('./routes/auth'); 
const cors = require("cors");


// app use
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//to avoid CORS policy errors
app.use(cors());
//add all routes
app.use('/signup', signup)
app.use('/login',login)
app.use('/logout',logout)
app.use('/auth',auth)


//basic testing api temporarily
app.get('/',(req,res)=>{
    res.send({
        result: "success",
        message :"Connection successful"
    })
})

module.exports = app;
