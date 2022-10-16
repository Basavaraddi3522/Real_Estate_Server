const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//this route will be used for login users

router.post("/",(req,res)=>{
    try{
        
        User.find({ mailId : req.body.email})
        .exec()
        .then(user=>{
            //check if the mailid exists
            if(user.length < 1){
                return res.json({
                    result: "failed",
                    message : "User doesn't exists, please sign up !!"
                })
            }
            //compare the password with database to check the authentication
            bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
                if(err){
                    return res.json({
                        result: "failed",
                        message : "Auth failed"
                    })
                }
                if(result){
                    const token = jwt.sign({
                        email : user[0].mailId,
                        user_id: user[0]._id
                    },
                    process.env.JWT_KEY,
                    {
                        expiresIn : "0.15h"
                    }
                    )
                    return res.json({
                        result: "success",
                        message : "login successful !!",
                        token : token
                    })
                }else{
                    return res.json({
                        result: "failed",
                        message : "Incorrect password !!"
                    })
                }
            })    
                       
        })

    }catch(e){
        return res.status(401).json({
            result : "failed",
            message : e.message
        })
    }
})
module.exports = router