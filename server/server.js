var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');
var bodyParser = require('body-parser');

var BeerSchema = require('./beer.schema.js');
var Beer = mongoose.model('Beer', BeerSchema);


app.get('/getbeer', function(req, res) {
  //logic to show only beers in range

	Beer.find({}, function(err, data){
		res.send(JSON.stringify(data));

	});
});

app.get('/getbeer/:id', function(req, res) {
    console.log(req.query.category);
    Beer.find({category: req.query.category}, function(err, data){
        res.send(JSON.stringify(data));
    });
});

app.get('/', function (req, res) {
  res.send('Hello Beer Lovers!');
});

// serve all static pages from the public folder
app.use(express.static("public"));

// if file not found, send 404
app.use(function(req, res, next) {
	res.status(404);
	res.send('404 file not found');
});

app.listen(8000, function () {
  console.log('Beer guru listening in on port 8000!');
});