const express = require("express");
const { getAllLike, getSingleLike, createLike } = require("../handlers/likes");


const likeRouter = express.Router();

likeRouter.get("/like", getAllLike);
likeRouter.get("/like/:id", getSingleLike);
likeRouter.post("/like", createLike);



module.exports = likeRouter;