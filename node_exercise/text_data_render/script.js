const fs = require("fs")
let name = document.getElementById("name")
let age = document.getElementById("age")
let city = document.getElementById("city")
let nationality = document.getElementById("nationality")
let state = document.getElementById("age")

function refresh_results()
{
    fs.readFile("./text_file.json", (error, data) => {
        if (error) return console.log(error);
        let json_data = JSON.parse(data);
        console.log(json_data.name)
    });
}