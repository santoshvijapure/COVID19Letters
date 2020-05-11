var express = require("express")
var router = express.Router();
var Letter = require("../models/Letter")


module.exports=router.get("/home",(req,res)=>{

    
    Letter.find({}).sort('-date').limit(18).exec((err,letters)=>{
        if (err) {
            console.log(err);
        } else {
            Letter.find({}).sort('-date').exec((err,countryLetters)=>{
                if (err) {
                    console.log(err);
                } else {
                  
                    res.render("index",{ letters ,countryLetters})
                }
            })
        }
    })
})
module.exports=router.get("/all",(req,res)=>{

    
    Letter.find({}).sort('-date').exec((err,letters)=>{
        if (err) {
            console.log(err);
        } else {
            Letter.find({}).sort('-date').exec((err,countryLetters)=>{
                if (err) {
                    console.log(err);
                } else {
                  
                    res.render("index",{ letters ,countryLetters})
                }
            })
        }
    })
})


module.exports=router.get("/show/:id",(req,res)=>{
    Letter.findById(req.params.id, (err,Letter)=>{
        if (err) {
            console.log(err);
            res.redirect("/")
        } else {
            res.render("show",{Letter});
        }
    })
})

