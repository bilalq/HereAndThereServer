//key: Yh5B7Is6s91ey3vZXvdY5IOWsMldQXcq

var request = require('request-promise');

module.exports = function(origin, startDate, endDate, callback) {
//	var start = startDate;
//	var end = endDate;
	var city = origin;
//	if (startDate != undefined && endDate != undefined) {
//		return request.get('http://terminal2.expedia.com/x/activities/search?location=London&startDate=' + startDate + '&endDate=' + endDate + '&apikey=Yh5B7Is6s91ey3vZXvdY5IOWsMldQXcq');		
//	} else {
	//http://terminal2.expedia.com/x/activites/details?activityId=169503&apikey=Yh5B7Is6s91ey3vZXvdY5IOWsMldQXcq
	return request.get('http://terminal2.expedia.com/x/activities/search?location=' + city + '&apikey=Yh5B7Is6s91ey3vZXvdY5IOWsMldQXcq');
//	}
}