var express = require('express');
var app = express();
var cors = require('cors');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');
var bodyParser = require('body-parser');
var BeerSchema = require('./beer.schema.js');
var Beer = mongoose.model('Beer', BeerSchema);

app.use(bodyParser.json());
app.use(cors());

app.use(function(req,res,next){
  console.log(req.url);
  next();
});
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/getbeer', function(req, res) {
  Beer.find(
    { }, // filter object - empty filter catches everything
    function(err, data) {
      if(err) {
        res.status(500);
        res.send("Error getting all line items");
        return;
      }
      console.log(data, "this should be our beers data"); 
      res.send(JSON.stringify(data));
    }
  );
});

// app.get('/getbeer/:id', function(req, res) {
//     console.log(req.query.id);
//     Beer.find({id: req.query.id}, function(err, data){
//         res.send(JSON.stringify(data));
//     });
// });

// app.post("/getbeer/:id", function(req, res){ // getBestBeer function
//   var item = {
//     id: req.body.item.id || "",
//     name: req.body.item.name || "",
//     color: req.body.item.color || "",
//     bitterness: req.body.item.bitterness || "",
//     alcohol: req.body.item.alcohol || "",
//     image: req.body.item.image || "",
//     rating: req.body.item.rating || "",
//     description: req.body.item.description || "",
//     category: req.body.item.category || "",
//     comments: req.body.item.comments || "",
//     userId: 0 //todo
//   };
// });


// serve all static pages from the public folder


// if file not found, send 404
app.use(function(req, res, next) {
	res.status(404);
	res.send('404 file not found');
});

app.listen(4000, function () {
  console.log('Beer guru listening in on port 4000!');
});