var bike = require('./bike');
var walk = require('./walk');
var request = require('request-promise');

//get pronto Stations as json and make array 
var data = request.get('https://communities.socrata.com/resource/rsib-fvg5.json');

function json2array(data){
    var jsonStations = [];
    var keys = Object.keys(data);
    keys.forEach(function(key){
        result.push(data[key]);
    });
    return jsonStations;
}
//compare distance between origin and pronto stations
function getOriginStation(origin, jsonStations, data) {
  var jsonStations = json2array(data);
  var originStation = 999999999999;
  var station;
  for (i = 0; i < 49; i++) {
  	if ((walk(origin, jsonStations[i]).then(function(directions){directions.distance})) < originStation) {
  	    originStation = (walk(origin, jsonStations[i]).then(function(directions){directions.distance}));
  	    station = jsonStations[i];
  	}
  }
  return station;
}

//compare distance between destination and pronto stations
function getDestinationStation(destination, jsonStations, sdata) {
  var originStation = 999999999999;
  var jsonStations = json2array(data);
  var station;
  for (i = 0; i < 49; i++) {
  	if ((walk(origin, jsonStations[i]).then(function(directions){directions.distance})) < originStation) {
  	    originStation = (walk(origin, jsonStations[i]).then(function(directions){directions.distance}));
  	    station = jsonStations[i];
  	}
  }
  return station;
}

var originStation = getOriginStation(origin, jsonStations);
var destinationStation = getDestinationStation(origin, jsonStations);

walk(origin, originStation);
bike(originStation, destinationStation);
walk(destinationStation, destination);