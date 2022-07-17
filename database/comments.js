const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    blog_id: {
        type: mongoose.Types.ObjectId,
        ref: "Blog",
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    message:String,
    rating:Number,

})


const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;