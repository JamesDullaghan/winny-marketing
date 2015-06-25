var AppDispatcher = require('../dispatcher/AppDispatcher.js');

var AppConstants = require('../constants/AppConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _services = [];
var _errors = [];

var _service = {
  id: "",
  name: "",
  description: "",
  short_description: "",
  price: ""
}

var ServiceStore = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAllServices: function () {
    return _services;
  },

  getService: function () {
    return _service;
  },

  getErrors: function () {
    return _errors;
  }
});

ServiceStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    case ActionTypes.RECEIVE_SERVICES:
      _services = action.json.services;
      ServiceStore.emitChange();
      break;

    case ActionTypes.RECEIVE_SERVICE:
      if (action.json) {
        _service = action.json.service;
        _errors = [];
      }
      ServiceStore.emitChange();
      break;
  }

  return true;
});

module.exports = ServiceStore;
