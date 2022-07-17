const express = require("express");
const { getAllCategory, getSingleCategory, createCategory } = require("../handlers/category");

const categoryRouter = express.Router();

categoryRouter.post("/category",createCategory);
categoryRouter.get("/category",getAllCategory);
categoryRouter.get("/category/:id",getSingleCategory)

module.exports=categoryRouter;