var http = require('http');
var express = require('express');

var app = express();
var PORT = 3000;

app.get('/', function(req, res) {
    res.status(200).send("Je to tam.");
});

app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
})