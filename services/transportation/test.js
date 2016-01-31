var bus = require('./bus');
var gm = require('googlemaps')

/*var origin = "1100 NE Campus Pkwy #200, Seattle, WA 98105";
var destination = "401 NE Northgate Way, Seattle, WA 98125";

bus(origin,destination)
.then(function(result) {
	console.log('successful');
	console.log(result.legs[0].steps[1].transit_details);
})
.catch(function(err) {
	console.log('ERROR: '+err);
});*/

var latlng = '40.714224,-73.961452';

/*
var address1 = "1100 NE Campus Pkwy #200, Seattle, WA 98105";
var address2 = "401 NE Northgate Way, Seattle, WA 98125";

gm.geocode(address1, function(err, data) {
    if (data.status == "OK") {
        if (data.results.length >= 1) {
            var latLng = data.results[0].geometry.location;
            console.log(latLng);
        }
    }
});

gm.geocode(address2, function(err, data) {
    if (data.status == "OK") {
        if (data.results.length >= 1) {
            var latLng = data.results[0].geometry.location;
            console.log(latLng);
        }
    }
});
*/

var latlng1 = '47.7069872,-122.3261615';
gm.reverseGeocode(latlng1, function(err, data) {
    if (data.status == "OK") {
        if (data.results.length >= 1) {
            var latLng = data.results[0].geometry.location;
            console.log(latLng);
        }
    }
 });