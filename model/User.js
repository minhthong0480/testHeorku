const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is required",
    },
    email: {
        type: String,
        required: "Email is required",
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    isStaff: {
        type: Boolean,
        default: false
    },

    resetLink:{
        type: String,
        default:''
    }
    
    // date: {
    //     type: Date,
    //     default: Date.now
    // }
},{timeStamps: true})

module.exports = mongoose.model('User', userSchema)