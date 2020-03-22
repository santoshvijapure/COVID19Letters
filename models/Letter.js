const mongoose = require('mongoose')
const letterScheema = new mongoose.Schema({
    from:{
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default:Date.now,
        require:true
      }
})

module.exports = mongoose.model('Letters', letterScheema)