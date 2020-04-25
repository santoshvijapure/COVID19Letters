const express = require('express')
const app = express()
var bodyParser=require("body-parser")
var path = require("path");
var Letters = require("./models/Letter")
const fs = require('fs');
//mongoose setup

const mongoose = require('mongoose')
var mongoURL=process.env.MONGODB_URI
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

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-headers","Origin,X-Requested-with,Content-Type,Accept")
  next()
})
app.use(express.static("public"));


//root route
app.get('/',  (req, res) => {
    res.redirect("/home")
    //   res.json({
    //   statusCode:200,
    //   messege:"API working Properly"

    // })
})






const navigation = require('./routes/navigation')
app.use(navigation) 
const letters =require("./routes/letters")
app.use(letters)
const searchRoutes=require("./routes/search")
app.use(searchRoutes)


app.get('/downloadAll', (req, res) => {
  Letters.find({},(err,data)=>{
    if (err) {
      console.log(err);
      res.redirect("/")
    } else {
      let output=[]
      output.push(data)
      let name=Date().substr(4,11)+".json"
      fs.writeFile(name,output,(err)=>{
        if (err) {
          console.log(err);
        } else {
        res.download(name)
        }
      })

    }
  })
});


PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
  console.log("server started at port : " + PORT )
});
