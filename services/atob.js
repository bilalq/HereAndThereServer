var bike = require("./transportation/bike");
var bus = require("./transportation/bus");
var car = require("./transportation/car");
var walk = require("./transportation/walk");
var bike = require("./transportation/bike");
var Promise = require('bluebird');

var AVG_SALARY_PER_SEC = 0.00693629807;
var METER_TO_MILE = 0.000621371;

var cost = function(a) {
  if (a.type === "driving") {
    console.log("computing driving cost");
    a.cost = 1.35 + a.time * 0.24 + a.distance * METER_TO_MILE * 0.000621371 + 1.20 + 0.20;
    if (a.cost < 4.20) {
      a.cost = 4.20;
    }
  }
  return a.time * AVG_SALARY_PER_SEC + a.cost;
}

var compareTransportation = function(a, b) {
  costA = cost(a);
  costB = cost(b);

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
                        bike(origin, destination),
                        car(origin, destination)];

  return Promise.all(directionsPromises).then(function(directions) {
    return directions.sort(compareTransportation);
  });
}
