const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const signup = require('./routes/signup');
const login = require('./routes/login');
const logout = require('./routes/logout');
const auth = require('./routes/auth'); 
const assetRoute = require('./routes/asset');
const realEstateRoute = require('./routes/api_List');
const cors = require("cors");
dotenv.config();
const port = process.env.PORT||8080;

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
app.use('/property_List', realEstateRoute);
app.use('/asset', assetRoute);


// database connection
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true,useUnifiedTopology:true },function(err){
    if(err) console.log(err);
    console.log("database is connected");
});


//basic testing api temporarily
app.get('/',(req,res)=>{
    res.send({
        result: "success",
        message :"Connection successful"
    })
})

// listening port
app.listen(port, () => console.log(`App listening on port ${port}!`));
  