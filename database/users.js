const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        select:false,
    },
    social_profile:{
        linkedIn:String,
        facebook: String,
        Twiter: String,
        Github:String,
        Instagram: String,
    },
    Addresses: [
        {
            // Line1: String,
            City: String,
            State: String,
            PinCode:Number,
        }
    ],
    blog_id: {
        type: mongoose.Types.ObjectId,
        ref: "Blog",
    }

})


const User = mongoose.model("User", userSchema);

module.exports = User;