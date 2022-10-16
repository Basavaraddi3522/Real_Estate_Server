const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    mailId : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true,
        minlength : 8
    }
});

const user = mongoose.model('User',userSchema);
module.exports = user;