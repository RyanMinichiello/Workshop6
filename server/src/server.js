// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();

var bodyParser = require('body-parser');



app.use(bodyParser.text());

app.use(express.static('../client/build'));


// Defines what happens when it receives the `GET /` request


// Starts the server on port 3000!
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// Handle POST /reverse [data]
// Handle POST /reverse [data]
