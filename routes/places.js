var places = require('../services/places');

module.exports = function(req, res) {
	if (req.query.origin == null) {
		res.status = 400;
		return res.send('Please enter a location');
	}
	places(req.query.origin)
	.then(function(placeList) {
		res.send(placeList);
	})
	.catch(function(err) {
		res.status = 500;
		res.send(err);
	});
}