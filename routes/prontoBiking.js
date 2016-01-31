var prontoBiking = require('../transportation/biking');

module.exports = function(req, res) {
	if (req.query.origin == null) {
		res.status = 400;
		return res.send('Please enter an origin.');
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