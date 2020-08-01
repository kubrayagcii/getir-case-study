const express = require ('express'); 
const router = express.Router();

const bodyParser = require('body-parser');
const Activity = require('../models/model');




/*router.get('/',async (req,res) => {
    
    var pipeline = [
        
        { $match : {createdAt : {"$gte": new Date(req.body.startDate),"$lte": new Date(req.body.endDate)}}},
        { $project: {
            _id: 0,
            key : 1,
            createdAt :1,
            totalCount: { $sum: "$counts" }

        }},
        { $match : {totalCount: {"$gte":req.body.minCount,"$lte":req.body.maxCount}}},
           
    ];
     
    const request = await Activity.aggregate(pipeline);
    if(res.status(200)){
        res.status(200).json({
            code: 0,
            message : 'Success',
            records : request
        });
    }else{
        res.json({
            code:1,
            message:'Fail'
        })
    }


});*/



router.get('/',async (req,res) => {

    router.use( bodyParser.json() );  
    var payload={
        "startDate": "2016-01-26",
        "endDate": "2018-02-02",
        "minCount": 2700,
        "maxCount": 3000
        }
    
    
    req.body = payload

    var pipeline = [
        
        { $match : {createdAt : {"$gte": new Date(req.body.startDate),"$lte": new Date(req.body.endDate)}}},
        { $project: {
            _id: 0,
            key : 1,
            createdAt :1,
            totalCount: { $sum: "$counts" }

        }},
        { $match : {totalCount: {"$gte":req.body.minCount,"$lte":req.body.maxCount}}},
           
    ];
     
    const request = await Activity.aggregate(pipeline);
    if(res.status(200)){
        res.status(200).json({
            code: 0,
            message : 'Success',
            records : request
        });
    }else{
        res.json({
            code:1,
            message:'Fail'
        })
    }
});

module.exports =  router ;
