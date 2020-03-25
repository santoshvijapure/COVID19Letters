var express =require("express")
var router = express.Router()

module.exports = router
                    .get("/about",(req,res)=>{
                            res.render("about")
                    })
                    .get("/team",(req,res)=>{
                        res.render("team")
                    })
                    .get("/privacyPolicy",(req,res)=>{
                        res.render("privacyPolicy")
                    })
                    .get("/help",(req,res)=>{
                        res.render("help")
                    })
                    .get("/contribute",(req,res)=>{
                        res.render("contribute")
                    })
                    
