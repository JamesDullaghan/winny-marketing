var AppDispatcher = require('../dispatcher/AppDispatcher.js');

var AppConstants = require('../constants/AppConstants.js');
var EventEmitter = require('events').EventEmitter;

var assign = require('object-assign');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _team = [];
var _errors = [];

var TeamStore = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getTeam: function () {
    return _team;
  },

  getErrors: function () {
    return _errors;
  }

});

TeamStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    case ActionTypes.RECEIVE_TEAM:
      console.log(action);
      _team = action.json.team;
      TeamStore.emitChange();
      break;
  }

  return true;
});

module.exports = TeamStore;
