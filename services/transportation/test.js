var bus = require('./bus');

var origin = "1100 NE Campus Pkwy #200, Seattle, WA 98105";
var destination = "401 NE Northgate Way, Seattle, WA 98125";

bus(origin,destination)
.then(function(result) {
	console.log('successful');
	console.log(result.legs[0].steps[1].transit_details);
})
.catch(function(err) {
	console.log('ERROR: '+err);
});