const express = require("express");
const { getAllBlog, getSingleBlog, createBlog, updateBlog } = require("../handlers/blog");


const blogRouter = express.Router();

blogRouter.get("/blog", getAllBlog);
blogRouter.get("/blog/:id", getSingleBlog);
blogRouter.post("/blog",createBlog);
blogRouter.patch("blog/:id",updateBlog);


module.exports = blogRouter;