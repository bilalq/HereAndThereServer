var bike = require("./transportation/bike");
var bus = require("./transportation/bus");
var car = require("./transportation/car");
var walk = require("./transportation/walk");
var bike = require("./transportation/bike");
var Promise = require('bluebird');

var AVG_SALARY_PER_SEC = 0.00693629807

var compareTransportation = function(a, b) {
  costA = a.time * AVG_SALARY_PER_SEC + a.cost;
  costB = b.time * AVG_SALARY_PER_SEC + b.cost;

  if (costA === costB) {
    return 0;
  }
  if (costA < costB) {
    return -1;
  }

  return 1;
}

module.exports = function(origin, destination) {
  directionsPromises = [walk(origin, destination),
                        bus(origin, destination),
                        bike(origin, destination)]//,
                        //car(origin, destination)]

  return Promise.all(directionsPromises).then(function(directions) {
    return directions.sort(compareTransportation);
  });
}
