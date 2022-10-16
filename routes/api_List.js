const router = require('express').Router();
const bodyParser = require('body-parser');
const RealEstate = require('../models/assetModel');

// Your routing code goes here

router.use(bodyParser());
router.get('/', async(req,res)=>{
   try{
    const searchQuery = req.query;
    const get_List = await RealEstate.find({
        topic: req.query.search
    }).limit(Number(req.query.page) * 5);
    res.json({
        status: 'Success',
        result: get_List
    });
   }
catch(e){
    res.json({
        status: 'failed',
        message: e.message
    });
}
});

//below apis are for backend debugging purpose
router.post('/post_Property', async(req, res)=>{
    try{
     const post_Property = await RealEstate.create(req.body);
     res.json({
        status: 'Success',
        result: post_Property
     });
    }
 catch(e){
     res.json({
         status: 'failed',
         message: e.message
     });
 }
 });

 router.put('/update_Property/:id', async(req, res)=>{
    try{
     await RealEstate.updateOne({_id: req.params.id}, req.body);
     const update_Property = await RealEstate.findOne({
        _id: req.params.id
     });
     res.json({
        status: 'Success',
        result: update_Property
     });
    }
 catch(e){
     res.json({
         status: 'failed',
         message: e.message
     });
 }
 });

 router.delete('/delete_Property/:id', async(req, res)=>{
    try{
     const delete_Property = await RealEstate.deleteOne({_id: req.params.id});
     
     res.json({
        status: 'Success',
        result: delete_Property
     });
    }
 catch(e){
     res.json({
         status: 'failed',
         message: e.message
     });
 }
 });

module.exports = router;