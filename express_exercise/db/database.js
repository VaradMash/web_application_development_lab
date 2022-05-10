const mongoose = require("mongoose");
const database_url = "mongodb://localhost:27017/exam_db";

function connect_to_db()
{

    mongoose.connect(database_url, (err) => {
        if(err)
        {
            console.log("Could not connect to database : " + err);
        }
        else
        {
            console.log("Connected to mongoDB database with URL " + database_url);
        }
    })
}

module.exports = connect_to_db;