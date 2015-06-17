var AppDispatcher = require('../dispatcher/AppDispatcher.js');

var AppConstants = require('../constants/AppConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _errors = [];
var _profile = {
  id: "",
  twitter_url: "",
  facebook_url: "",
  pinterest_url: "",
  linkedin_url: "",
  googleplus_url: "",
  yelp_url: "",
  meta_keywords: "",
  meta_description: ""
}

var ProfileStore = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getProfile: function () {
    return _profile;
  },

  getErrors: function () {
    return _errors;
  }

});

ProfileStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    case ActionTypes.RECEIVE_PROFILE:
      if (action.json) {
        _profile = action.json.profile;
        _errors = [];
      }
      if (action.errors) {
        _errors = action.errors;
      }
      ProfileStore.emitChange();
      break;
  }

  return true;
});

module.exports = ProfileStore;
