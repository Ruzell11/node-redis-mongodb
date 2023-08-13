import mongoose from 'mongoose'


const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        require: [true , "Movie title is required"]
    },
})

const Movie = new mongoose.model("Movie" , movieSchema)
module.exports = Movie