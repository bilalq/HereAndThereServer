var Promise = require('bluebird');
var gm = require('googlemaps');
// var secrets = require('../../secrets.json');


/*
var publicConfig = {
  key: secrets.googleKey
};


gm.config('google-private-key', secrets.googleKey);
*/

module.exports = function(origin, destination, travelMode) {
  return new Promise(function(resolve, reject) {
    gm.directions(
      origin,
      destination,
      function(err, result) {
         console.log('Successful, ' + result.routes.length + 'results');
        if(result.status === 'OK') {
          resolve(result.routes[0]);
        } else {
          reject(result.status); 
        }
      },
      'false',
      travelMode,
      undefined,
      'false',
      undefined,
      undefined
    );
  })
  .timeout(10000, 'Timed out when computing the route from '+origin
      +'to'+destination);
};

  
/*
var getDirection = function(origin, destination ) {
  origin = '1000 Great Hwy, San Francisco, CA 94121, USA';
  destination = '1501-1511 Haight St, San Francisco, CA 941117, USA';
  travelMode = 'transit';
  gm.directions(
    origin,
    destination,
    function(err, result) {
       console.log('Successful, ' + result.routes.length + 'results');
      if(result.status === 'OK') {
        result.routes[0].legs.forEach(function(leg) {
          console.log(leg.distance);
          console.log(leg.duration);
          console.log(leg.html_instructions);
          console.log(leg.polyline);
          console.log(leg.start_location);
          console.log(leg.steps); //special case for travel_mode = transit, contains
                                  //arrival & departure stop & time, and more info.
          console.log(leg.travel_mode);
        });
      } else {
        console.log('error: ' + result);
      }
    },
    'false',
    travelMode,
    undefined,
    'false',
    undefined,
    undefined
  );
};

getDirection({},{});
*/
