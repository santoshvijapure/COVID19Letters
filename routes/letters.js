var express = require("express")
var router = express.Router();
var Letter = require("../models/Letter")

module.exports= router.post("/new",(req,res)=>{
    Letter.create({
        from: req.body.from.toLowerCase(),
        to : req.body.to.toLowerCase(),
        content : req.body.content
    },(err,data)=>{
        if (err) {
            console.error(err);
        } else {
            console.log(data);
            res.redirect("/")
        }
    })
})