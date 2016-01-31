var Promise = require('bluebird');
var tsp = require('tspsolver');

// !!! This can only solve one problem at a time, because 
// all the variables are static
module.exports = function(addresses) {
  //esssential step that resets the static variables
  tsp.startOver();

  //stub addresses
  if(false){
    addresses = [
      "1100 NE Campus Pkwy #200, Seattle, WA 98105",
      "7400 Sand Point Way NE, Seattle, WA 98115",
      "1959 NE Pacific St, Seattle, WA 98105",
      "5041 35th Ave NE, Seattle, WA 98105",
      "401 NE Northgate Way, Seattle, WA 98125"
    ];
  }

  addresses.forEach(function(place) { 
    tsp.addAddress(place);
  });

  //one-way trip
  return new Promise(function(resolve, reject) {
    tsp.solveAtoZ(function() {
      var embed_uri = tsp.createGoogleLink(true);
      var map_uri   = tsp.createGoogleLink();

      var order = tsp.getOrder();
      var route = order.map(function(index) {
        return addresses[index];
      });

      var result = {
        'route': route,
        'embed_uri': embed_uri,
        'map_uri' :  map_uri
      };
      resolve(result);
    });
  })
  .timeout(10000, 'Timed out when computing TSP.');
};
