const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    }, 
    username:{
        type: String, 
        required: true
    },
    email:{
        type: String, 
        required: true
    },
    password: {
        type: String, 
        require: true
    },
    curtidos: [{
        id:{
            type: Number,
        }
    }]
})


const User = mongoose.model("User", userSchema);

module.exports = User;