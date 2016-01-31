var googleMaps = require('./transportation/googleMaps');
var Promise = require('bluebird');

var compareTransportation = function(a, b) {
  return a;
}

module.exports = function(req) {
  origin = req.query.origin;
  destination = req.query.destination;

  var walkP = googleMaps.getWalkTime(origin, destination);

  var busP = googleMaps.getBusTime(origin, destination);

  return Promise.all([walkP, busP]).then(function(trans) {
    return trans.sort(compareTransportation)[0];
  });
}
