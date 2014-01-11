// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
  res.send('Hello Node.JS <b>2!</b>');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});