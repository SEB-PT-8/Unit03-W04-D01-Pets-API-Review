const mongoose = require('mongoose')

// Schema

const petSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    age:{
        type: Number,
        required:true,
        min: 0
    },
    breed: String
})


// model
const Pet = mongoose.model('Pet', petSchema)


// export the model
module.exports = Pet



