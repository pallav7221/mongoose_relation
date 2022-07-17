const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title : String,
    body:String,
    category_id:{
        type:mongoose.Types.ObjectId,
        ref:"Category",
    }

}) 


const Blog = mongoose.model("Blog",blogSchema);

module.exports=Blog;