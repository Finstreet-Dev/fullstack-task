const mongoose = require("mongoose")

const database = () => {

    //Since this is for task, I am removing .env from .gitignore
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => console.log("Database Connected Successfully"))
        .catch((err) => console.log("Error Connecting to Mongodb => ", err));
}

module.exports = database;