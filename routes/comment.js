const express = require("express");
const { getAllComment, getSingleComment, createComment, updateComment } = require("../handlers/comments");


const commentRouter = express.Router();

commentRouter.get("/comment", getAllComment);
commentRouter.get("/comment/:id", getSingleComment);
commentRouter.post("/comment", createComment);
commentRouter.patch("comment/:id", updateComment);


module.exports = commentRouter;