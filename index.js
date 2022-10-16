const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT||8080;


// database connection
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true,useUnifiedTopology:true },function(err){
    if(err) console.log(err);
    console.log("database is connected");
});


// listening port
app.listen(port, () => console.log(`App listening on port ${port}!`));
  