const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    blog_id: {
        type: mongoose.Types.ObjectId,
        ref: "Blog",
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    emoji:String,
})


const Like = mongoose.model("Like", likeSchema);

module.exports = Like;