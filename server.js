const express = require('express')
const app = express()
var bodyParser=require("body-parser")
var path = require("path");
var Letters = require("./models/Letter")

//mongoose setup

const mongoose = require('mongoose')
var mongoURL=require("./config/config").mongoUrl

mongoose.connect(mongoURL, {
   useUnifiedTopology: true,
   useNewUrlParser: true 
},(err)=>{
  if (err) {
    console.log('err', err)
  } else {  
    console.log('connected to MongoDB server')
  }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }))


app.set('view engine', 'ejs')
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-headers","Origin,X-Requested-with,Content-Type,Accept")
  next()
})

//root route
app.get('/', async (req, res) => {
    
      res.json({
      statusCode:200,
      messege:"API working Properly"

    })
})

//routes
const letters =require("./routes/letters")
app.use(letters)
const searchRoutes=require("./routes/search")
app.use(searchRoutes)


//reduirection the shortlink to full link

PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
  console.log("server started at port : " + PORT )
});
