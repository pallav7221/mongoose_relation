const mongoose = require("mongoose");

async function connectDatabase(){
    const dbUri = "mongodb://localhost:27017/relation";
    try {
        const res = await mongoose.connect(dbUri);
        console.log("Connection successful")
    } catch (e) {
        console.error("Something wrong" , e.message);
        throw e;
    }
}

module.exports=connectDatabase;