var Promise = require('bluebird');
var tsp = require('tspsolver');
var gm = require('googlemaps');

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
    /*
    addresses = [
      [47.7069872,-122.3261615],
      [47.65660399999999,-122.31608]
    ];*/
  }


  var locsPromise = addresses.map(function(address) {
    if (typeof(address) == 'string') {
      return Promise.resolve(address);
    } else {
      return new Promise(function(resolve, reject) {
        var latlng = address[0] +','+ address[1];
        gm.reverseGeocode(latlng, function(err, data) {
          if (err) return reject(err);
          var place = data.results[0].formatted_address;
          resolve(place);
        });
      })
    }
  })
  return Promise.all(locsPromise)
  .then(function(locs) {
    locs.forEach(function(loc) {
      console.log(loc);
      tsp.addAddress(loc);
    })
  })
  .then(function() {
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
  })
  .catch(function(err) {
    console.error(err.message);
    console.error(err.stack);
    throw err;
  })
  .timeout(15000, 'Timed out when computing TSP.');
};
