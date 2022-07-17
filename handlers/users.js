
const User = require("../database/users")

async function createUser(req,res,next){
    const {user} = req.body;

    let userDoc = await User.create(user);

    return res.send({
        data:userDoc,
    })
}
async function getAllUser(req,res,next){

    let users = await User.find();

    return res.send({
        data:users,
    })
}

module.exports={createUser,getAllUser};