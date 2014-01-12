var express = require('express');
var app = express();
app.listen(8000);

// Required to load the css stylesheet file defined in locals
app.use(express.static(__dirname + '/public'));

// New for Express 3.0
app.set("view engine", "ejs");

var tweets = [];

app.get('/', function(req, res) {
	  var title = 'Chirpie',
	    header = 'Welcome to Chirpie';
	    
	  res.render('index', {
	  	locals: {
	  		'title': title,
	  		'header': header,
	  		'tweets': tweets,
	  		stylesheets: ['style.css']
	  	}
	  })
})

// bodyParser is 'middleware'
app.post('/send', express.bodyParser(),
  function(req, res) {
  	if (req.body && req.body.tweet) {
  		tweets.push(req.body.tweet)
  		res.send('{status:"ok", message:"Tweet received"}')
  	}
  	else {
  		// no tweet?
  		res.send('{status:"nok", message:"No tweet received"}')
  	}
  })
  	
app.get('/tweets', function(req,res) {
	res.send(tweets);
})
	