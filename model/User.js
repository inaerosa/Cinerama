const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    id_movie:{
        type: Number, 
        required: true
    },
    name:{
        type: String,
        required: true
    },
    url: {
        type: String, 
        required: true
    }, 
    status: {
        type: String, 
        required: true
    }
})


const Movie = mongoose.model("User", movieSchema);

module.exports = Movie;