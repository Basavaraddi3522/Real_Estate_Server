const router = require('express').Router()
const jwt = require('jsonwebtoken')

router.post("/",(req,res)=>{
    try{
        const decoded = jwt.verify(req.body.token,process.env.JWT_KEY,);
        return res.json({
            result : "success",
            messesge :decoded
        })

    }catch(e){
        return res.json({
            result : "failed",
            message : e.message
        })
    }
})

module.exports = router;