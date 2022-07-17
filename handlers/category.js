const Category = require("../database/category")

async function createCategory(req, res, next) {
    const { category } = req.body;

    let categoryDoc = await Category.create(category);

    return res.send({
        data: categoryDoc,
    })
}
async function getAllCategory(req, res, next) {
    const { skip, limit } = req.query;

    const categories = await Category.find().skip(skip).limit(limit);

    await res.send({
        data: categories,
    })
}

async function getSingleCategory(req, res, next) {
    const { id } = req.params;
    const category = await Category.findById(id);
   
  
    return res.send({
        data: category,
    })
} 

module.exports={createCategory,getAllCategory,getSingleCategory}