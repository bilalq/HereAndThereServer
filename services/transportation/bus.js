var direction = require('./direction');

module.exports = function(origin, destination) {
  return direction(origin, destination, 'transit');
};
