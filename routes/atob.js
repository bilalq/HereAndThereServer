var atob = require('../services/atob');

module.exports = function(req, res) {
  if (req.query.origin == null || req.query.destination == null) {
    return res.status(400).send('Please enter a location');
  }

  atob(req).then(function(response) {
    res.send(response);
  }).catch(function(err) {
    return res.status(500).send("Having some trouble getting atob rankings, " + err.stack)});

}

