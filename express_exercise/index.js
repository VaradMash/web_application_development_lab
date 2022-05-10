const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// Internal imports
const connect_to_db = require("./db/database");
const router = require("./routes/routes");

// Defining port number
const port = 3000;

let app = express();

// Defining middleware 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}));

// Setting view engine
app.set("view engine", "ejs");

// Connect to database
connect_to_db();

// Defining API route
app.use("/api", router);

// Defining initial route
app.get("/", (req, res, next) => {
    console.log("GET /")
    res.render("index", {
        "message" : "Hello"
    })
})

app.get("/add_student", (req, res, next) => {
    console.log("/add_student");
    res.render("add_student");
})

app.listen(port, (err) => {
    if (err) throw err;
    console.log("Server listening at port " + port);
})