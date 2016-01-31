var tsp = require('../services/tsp');

module.exports = function(req, res) {
	var places = req.query.places;
	tsp(places)
	.then(function(result) {
	  res.send(result);
	})
	.catch(function(err) {
		res.status = 500;
		res.send(err);
	});
};