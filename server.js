let http = require('http');
let express = require('express');
const Quote = require('inspirational-quotes');

let app = express();
let PORT = 3000;

app.get('/', function(req, res) {
    res.status(200).send("Je to tam.");
});

app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
})