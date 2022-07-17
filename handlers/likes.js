const Like = require("../database/likes");
const Blog = require("../database/likes")
const User = require("../database/users");

async function getAllLike(req, res, next) {
    const { skip, limit } = req.query;

    const likes = await Blog.find().skip(skip).limit(limit);

    await res.send({
        data: likes,
    })
}

async function getSingleLike(req, res, next) {
    const { id } = req.params;
    const like = await Like.findById(id);
   
    const user = await User.find({
        userid: {
            id: user._id,
        }
    })
   
    like.user_id = user;
    return res.send({
        data: like,
    })
}

async function createLike(req, res, next) {
    const { like } = req.body;

    let likeDoc = await Like.create(like);

    return res.send({
        data: likeDoc,
    })
}


module.exports = { getAllLike, getSingleLike, createLike };