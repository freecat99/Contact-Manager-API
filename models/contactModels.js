const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "provide user id"],
        ref: "User"
    },
    name:{
        type: String,
        required: [true, "please add contact name"]
    },
    email:{
        type: String,
        required: [true, "please add contact email"]
    },
    phone:{
        type: String,
        required: [true, "please add contact phone"]
    }
},{
    timestamps: true
});

module.exports = mongoose.model("Contact", contactSchema);