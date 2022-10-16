const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

//this route will be used for registering users
router.post("/",(req,res)=>{
    try{
                
        //hashing the password for more security 
        bcrypt.hash(req.body.password,10,(err,hash)=>{
            if(err){
                return res.json({
                    result : "failed",
                    message : err
                });
            }else{
                let user = new User({
                    mailId : req.body.email,
                    password : hash
                });
                user
                .save()
                .then(result=>{
                    // user is registered successfully
                    return res.json({
                        result : "success",
                        message: "Registration Successful !!"
                    })
                })
                .catch(e=>{
                    if(e.message.includes("duplicate key error collection")){
                        return res.json({
                            result : "failed",
                            message: "Email already exists !!"
                        })
                    }
                    return res.json({
                        result : "failed",
                        message: e.message
                    })
                })
            }            
        })

    }catch(e){
        return res.json({
            result : "failed",
            message : e.message
        })
    }
})

module.exports = router;