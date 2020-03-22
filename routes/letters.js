var express = require("express")
var router = express.Router();
var Letter = require("../models/Letter")

module.exports= router.post("/new",(req,res)=>{
    Letter.create({
        from: req.body.from,
        to : req.body.to,
        content : req.body.content
    },(err)=>{
        if (err) {
            console.error(err);
        } else {
            res.redirect("/")
        }
    })
})