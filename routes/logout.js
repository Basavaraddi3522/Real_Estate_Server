const router = require('express').Router()

//this route will be used for logging out the users
router.post("/",(req,res)=>{
    try{
        const token = undefined;
        return res.json({
            result : "success",
            message : "log out successful",
            token : token
        })

    }catch(e){
        return res.json({
            result : "failed",
            messsage : e.message
        })
    }    
})

module.exports = router;

