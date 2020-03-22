var express = require("express")
var router = express.Router();
var Letter = require("../models/Letter")

module.exports=router.get("/all",(req,res)=>{
    Letter.find({},(err,Letter)=>{
        if (err) {
            console.log(err);
        } else {
            res.send(Letter)
        }
    })
})


module.exports=router.get("/:to",(req,res)=>{
    Letter.find({ to: req.params.to},(err,Letter)=>{
        if (err) {
            console.log(err);
        } else {
            res.send(Letter)
        }
    })
})

module.exports=router.get("/:from/:to",(req,res)=>{
    Letter.find({from : req.params.from , to: req.params.to},(err,Letter)=>{
        if (err) {
            console.log(err);
        } else {
            res.send(Letter)
        }
    })
})