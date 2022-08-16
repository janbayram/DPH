let http = require('http');
let express = require('express');
const Quote = require('inspirational-quotes');

let app = express();

let port = process.env.PORT;
if(port == null || port == "") {
 port = 5000;
}

app.get('/', function(req, res) {
    res.send(Quote.getQuote());
});

app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
})