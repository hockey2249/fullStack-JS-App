var express = require("express");
var app = express();
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var db = require('./models/'); 


app.get('/api/cards', function(req, res){
	db.Card.find(function(err, cards){
		if (err){
			return console.log("index error: " + err);
		}
		res.json(cards);
	});
});

app.get('/api/cards/:id', function (req, res) {
  db.Card.findOne({_id: req.params.id }, function(err, data) {
  		if (err){
			return console.log("index error: " + err);
		}
    res.json(data);
  });
});

app.post('/api/cards', function (req, res) {
	var card = new db.Card(req.body);
	console.log(card);
	console.log(req.body);
  	card.save(function(err) {
  		if (err){
			return console.log("Post error: " + err);
		}
  });
});



app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});