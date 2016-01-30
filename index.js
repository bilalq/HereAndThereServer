var express = require('express');
var places = require('./routes/places');
var atob = require('./routes/atob');
var app = express();

app.get('/places', function (req, res) {
  res.send(places.getTopPlaces());
});

app.get('/atob', function (req, res) {
  res.send(atob.navigate());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
