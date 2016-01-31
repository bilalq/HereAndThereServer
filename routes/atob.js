var atob = require('../services/atob');

module.exports = function(req, res) {
  atob(req, function(err, path) {
    if(err) {
      res.status(500).send("Having some trouble getting atob rankings");
      return;
    }

    res.send(path);
    return;
  });
}
