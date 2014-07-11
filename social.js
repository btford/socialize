var twitter = require('twitter');

module.exports = function (opts) {

  var twit = new twitter(opts);

  function get (key, cb) {
    twit.getHomeTimeline({}, function (values) {
      for (var i = values.length - 1; i >= 0; i--) {
        var value = values[i].text;
        if (value.indexOf(key + ': ') === 0) {
          return cb(null, value.substr(key.length + 2));
        }
      }
      cb('sorry not found :(');
    });
  }

  function put (key, value, cb) {
    twit.updateStatus(key + ': ' + value, cb);
  }

  return {
    get: get,
    put: put
  };
};
