const Blog = require("../database/blogs")
const Category = require("../database/category");

async function getAllBlog(req,res,next){
    const {skip,limit} = req.query;

    const blogs = await Blog.find().skip(skip).limit(limit).populate('category_id');

    await res.send({
        data:blogs,
    })
}

async function getSingleBlog(req,res,next){
    const {id} = req.params;
    const blog = await Blog.findById(id);
    const category =await Category.find({
            blogid:{
                id:blog._id,
            }
    })
    blog.category_id=category;
    return res.send({
        data:blog,
    })
} 

async function createBlog(req, res, next) {
    const { blog } = req.body;

    let blogDoc = await Blog.create(blog);

    return res.send({
        data: blogDoc,
    })
}
async function updateBlog(req, res, next) {
    const {id} = req.params;
    const { blog:blogData } = req.body;

    let blogDoc = await Blog.findById(id);

    for(let [key,value] of Object.entries(blogData)){
        blogDoc[key]=value;
    }
    await blogDoc.save();

    return res.send({
        data: blogDoc,
    })
}

module.exports = { getAllBlog,getSingleBlog,createBlog,updateBlog };