const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    id_movie:{
        type: Number, 
        required: true
    },
    name:{
        type: String,
        required: true
    },
    url: {
        type: Number, 
        required: true
    }, 
    status: {
        type: String, 
        required: true
    }
})


const User = mongoose.model("User", userSchema);

module.exports = User;