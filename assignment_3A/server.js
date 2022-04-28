const express = require("express");

var app = express()

app.use(express.static('public'));

// // Defining routes for the javascript and CSS
// app.use('/css', express.static('/public/styles'));
// app.use('/js', express.static('/public/scripts'))
app.use('/assets', express.static('/public/assets'))


// Defining route for sales page.
app.use('/sales', express.static('/public/sales'));

// Defining route for contact us.
app.use('/contact_us', express.static('/public/contact_us'));

var server = app.listen(8080, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
})
