const Blog = require("../database/comments")
const Category = require("../database/blogs");
const User = require("../database/users");

async function getAllComment(req, res, next) {
    const { skip, limit } = req.query;

    const comments = await Blog.find().skip(skip).limit(limit);

    await res.send({
        data: comments,
    })
}

async function getSingleComment(req, res, next) {
    const { id } = req.params;
    const comment = await Blog.findById(id);
    const category = await Category.find({
        blogid: {
            id: blog._id,
        }
    })
    const user = await User.find({
        userid: {
            id: user._id,
        }
    })
    comment.categoery_id = category;
    comment.user_id = user;
    return res.send({
        data: comment,
    })
}

async function createComment(req, res, next) {
    const { comment } = req.body;

    let commentDoc = await Comment.create(comment);

    return res.send({
        data: commentDoc,
    })
}
async function updateComment(req, res, next) {
    const { id } = req.params;
    const { comment:commentData } = req.body;

    let commentDoc = await Comment.findById(id);

    for (let [key, value] of Object.entries(commentData)) {
        commentDoc[key] = value;
    }
    await commentDoc.save();

    return res.send({
        data: commentDoc,
    })
}

module.exports = { getAllComment, getSingleComment, createComment, updateComment };