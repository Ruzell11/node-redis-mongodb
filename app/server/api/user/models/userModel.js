import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require: [true , "User email is required"]
    },
})

const User = new mongoose.model("User" , userSchema)
module.exports = User