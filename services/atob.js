var bike = require("./transportation/bike");
var bus = require("./transportation/bus");
var car = require("./transportation/car");
var walk = require("./transportation/walk");
var bike = require("./transportation/bike");
var Promise = require('bluebird');

var compareTransportation = function(a, b) {
  return a;
}

module.exports = function(origin, destination) {
  directionsPromises = [walk(origin, destination),
                        bus(origin, destination),
                        bike(origin, destination),
                        car(origin, destination)]

  return Promise.all(directionsPromises).then(function(directions) {
    return directions.sort(compareTransportation);
  });
}
