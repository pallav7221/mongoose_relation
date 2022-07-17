const express = require("express");
const cors = require("cors");
const connectDatabase = require("./database");
const blogRouter = require("./routes/blog");
const userRouter = require("./routes/user");
const categoryRouter = require("./routes/category");
const commentRouter = require("./routes/comment");
const likeRouter = require("./routes/like");


const app = express();

app.use(express.json());
app.use(cors());

app.use(logger)
app.use(userRouter)
app.use(blogRouter)
app.use(categoryRouter)
app.use(commentRouter)
app.use(likeRouter)


function logger(req,res,next){
    console.info(new Date(),req.method,req.path);
    next()
}

connectDatabase().then(()=>{
    app.listen(3001,()=>{
        console.log("Server is running on http://localhost:3001");
    })
})