const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "username mandatory"]
    },
    email:{
        type: String,
        required: [true, "email mandatory"],
        unique: [true, "email already in use"]
    },
    password:{
        type: String,
        required: [true, "password mandatory"]
    },
},{
    timestamps: true
})

module.exports = mongoose.model("User", userSchema);