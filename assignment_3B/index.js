var mongoose = require("mongoose");
var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

// Internal imports
var routes = require("./server/routes/routes");

// Connect to database
mongoose.connect("mongodb://localhost:27017/test");

// On connection
mongoose.connection.on("connected", () => {
    console.log("Connected to database");
})

mongoose.connection.on("error", (err) => {
    if (err)
    {
        console.log("Error in database connection: " + err);
    }
})

var app = express();

// Defining the port number
const port = 3000;

// Adding middleware
app.use(cors({
    origin:"http://localhost:4200"
}));
app.use(bodyparser.json());

// Static files
app.use(express.static(path.join(__dirname, "user_profile_app")));

// Connecting the routes
app.use("/api", routes);

app.listen(port, () => {
    console.log("Server Listening at port: " + port);
})


