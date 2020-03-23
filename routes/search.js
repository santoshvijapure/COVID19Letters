var express = require("express")
var router = express.Router();
var Letter = require("../models/Letter")

module.exports=router.get("/all",(req,res)=>{
    Letter.find({}).sort('-date').exec((err,letters)=>{
        if (err) {
            console.log(err);
        } else {
            res.render("index",{letters})
        }
    })
})

module.exports=router.get("/country",(req,res)=>{
    // Letter.find({ to: req.params.country}).sort('-date').exec((err,letters)=>{
    //     if (err) {
    //         console.log(err);
    //     } else {

    //         res.render("index",{ letters })
    //     }
    // })
    console.log(req.body);
    console.log(req.params);
    
    res.redirect("country/"+ req.body.country)
})

module.exports=router.get("show/:id",(req,res)=>{
    Letter.findById(req.params.id, (err,Letter)=>{
        if (err) {
            console.log(err);
        } else {
            res.render("show",{letter});
        }
    })
})




module.exports=router.get("/country/:to",(req,res)=>{
    Letter.find({ to: req.params.to}).sort('-date').exec((err,letters)=>{
        if (err) {
            console.log(err);
        } else {

            res.render("index",{ letters })
        }
    })
})

module.exports=router.get("/from/:from/to/:to",(req,res)=>{
    Letter.find({from : req.params.from , to: req.params.to},(err,letters)=>{
        if (err) {
            console.log(err);
        } else {
            res.send(letters)
        }
    })
})
