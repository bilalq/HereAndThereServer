//key: Yh5B7Is6s91ey3vZXvdY5IOWsMldQXcq

var request = require('request-promise');

module.exports = function(origin, startDate, endDate, callback) {
	var options = {
		uri: 'http://terminal2.expedia.com/x/activities/search',
		qs: {
			apikey: 'Yh5B7Is6s91ey3vZXvdY5IOWsMldQXcq',	

			location: origin
		}
	}
	return request.get(options);
}