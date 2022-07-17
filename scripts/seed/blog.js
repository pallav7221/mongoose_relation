const { faker } = require("@faker-js/faker");
const Category = require("../../database/category")
const Blog = require("../../database/blogs")
const connectDatabase = require("../../database")

async function createFakeBlog(count) {
    const categ = await Category.find();

    for (let i = 0; i < count; i++) {
        const blog ={
            title: faker.hacker.phrase(),
            body: faker.lorem.paragraph(50),
            category_id : categ[Math.floor(Math.random()*53)]
        };
        await Blog.create(blog)
    }
    
}

connectDatabase().then(() => {
    createFakeBlog(50)
})