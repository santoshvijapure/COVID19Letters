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
                    .get("/contribute",(req,res)=>{
                        res.render("contribute")
                    })
