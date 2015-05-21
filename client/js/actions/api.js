var Request = require('superagent');
var User = require('../stores/user');
var Constants = require('../constants');
var Dispatcher = require('../dispatcher');
var SettingsStore = require('../stores/settings');

var TIMEOUT = 10000;

var _pendingRequests = {};

function abortPendingRequests(key) {
  if (_pendingRequests[key]) {
    _pendingRequests[key]._callback = function () {};
    _pendingRequests[key].abort();
    _pendingRequests[key] = null;
  }
}

// Get access token from user...
function token() {
  return User.token();
}

function makeUrl(part) {
  if (part.indexOf('http') >= 0) {
    return part;
  } else {
    return SettingStore.current().apiUrl + '/' + part;
  }
}

// GET request with a token
function get(url) {
  return Request
    .get(url)
    .timeout(TIMEOUT)
    .set('Authorization', token())
    .set('Accept', 'application/json');
}

// POST request with token param
function post(url, body) {
  return Request
    .post(url)
    .send(body)
    .set('Authorization', token())
    .set('Accept', 'application/json')
    .timeout(TIMEOUT);
}

// PUT request with token
function put(url, body) {
  return Request
    .put(url)
    .send(body)
    .set('Authorization', token())
    .set('Accept', 'application/json')
    .timeout(TIMEOUT);
}

// DELETE request with token
function del(url) {
  return Request
    .del(url)
    .set('Authorization', token())
    .set('Accept', 'application/json')
    .timeout(TIMEOUT);
}

function dispatch(key, response) {
  Dispatcher.dispatch({
    action: key,
    data: response
  });
}

// Dispatch response based on server response
function dispatchResponse(key) {
  return function(err, response) {
    if (err && err.timeout === TIMEOUT) {
      dispatch(Constants.TIMEOUT, response);
    } else if (response.status === 400) {
      dispatch(Constants.NOT_AUTHORIZED, response);
    } else if (!response.ok) {
      dispatch(Constants.ERROR, response);
    } else {
      dispatch(key, response);
    }
  };
}

function doRequest(key, url, callback) {
  abortPendingRequests(key);
  var request = _pendingRequests[key] = callback(makeUrl(url));
  request.end(dispatchResponse(key));
  return request;
}

module.exports = {
  get: function (key, url) {
    return doRequest(key, url, function(fullUrl) {
      return get(fullUrl);
    });
  },

  post: function (key, url, body) {
    return doRequest(key, url, function(fullUrl) {
      return post(fullUrl, body);
    });
  },

  put: function (key, url, body) {
    return doRequest(key, url, function(fullUrl) {
      return put(fullUrl, body);
    });
  },

  del: function (key, url) {
    return doRequest(key, url, function(fullUrl) {
      return del(fullUrl);
    });
  }
};
