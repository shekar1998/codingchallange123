const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    moviename: {
        type: String,
        unique:true
    },
    id:{
        type: String
    },
    boxofficeCollection:{
        type: String
    },
    director: {
        type: String
    },
    rating:{
        type: Number
    }

})

const Movie = mongoose.model('movie', movieSchema);
module.exports = Movie;