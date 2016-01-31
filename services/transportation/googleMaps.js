var Promise = require('bluebird');

var getBusTime = function(origin, destination) {
  var response = {
    type: 'bus',
    travelTimeMins: 9999,
    estimatedCost: 123.2,
    details: {foo: 'bar'}
  };

  return Promise.resolve(response);
}

var getWalkTime = function(origin, destination) {
  var response = {
    type: 'walk',
    travelTimeMins: 9999,
    estimatedCost: 123.2,
    details: {foo: 'bar'}
  };

  return Promise.resolve(response);
}

module.exports.getBusTime = getBusTime;
module.exports.getWalkTime = getWalkTime;
