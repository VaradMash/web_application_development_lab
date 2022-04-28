const http = require("http");

http.createServer((request, response) => {
    console.log("Listening on port 8080")
    response.write("Hello");
    response.end()
}).listen(8080)