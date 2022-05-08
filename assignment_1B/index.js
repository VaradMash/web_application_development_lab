const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const fs = require("fs");

const file_path = path.join(__dirname, "public", "users.json");

const port = 3000;

let app = express();

// Defining middleware for data parsing
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

// Defining public route
app.use(express.static(path.join(__dirname, "public")));

// Defining router
// app.use("/api", router);

app.post("/add_user", (req, res, next) => {
    fs.readFile(file_path, (err, data) => {
        if(err) throw err;
        data = JSON.parse(data);
        data.push(req.body);
        fs.writeFile(file_path, JSON.stringify(data), err => {
            if(err) throw err;
            console.log("Operation complete.");
            // window.location.href = path.join(__dirname, "public", "user_list.html");
            res.send("<h1>Successful entry!</h1>");
        });
    });
});

// Listening on port defined above
app.listen(port, () => {
    console.log("Server listening at port " + port);
})