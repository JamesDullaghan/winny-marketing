var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _contacts = [];
var _errors = [];
var _contact = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};

var ContactStore = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAllContacts: function () {
    return _contacts;
  },

  getContact: function () {
    return _contact;
  },

  getErrors: function () {
    return _errors;
  }

});

ContactStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    // @todo API Endpoint not implemented
    // case ActionTypes.RECEIVE_CONTACTS:
    //   _contacts = action.json.contacts;
    //   ContactStore.emitChange();
    //   break;

    case ActionTypes.RECEIVE_CREATED_CONTACT:
      if (action.json) {
        _contacts.unshift(action.json.story);
        _errors = [];
      }
      if (action.errors) {
        _errors = action.errors;
      }
      ContactStore.emitChange();
      break;

    // @todo API Endpoint not implemented
    // case ActionTypes.RECEIVE_CONTACT:
    //   if (action.json) {
    //     _contact = action.json.contact;
    //     _errors = [];
    //   }
    //   if (action.errors) {
    //     _errors = action.errors;
    //   }
    //   ContactStore.emitChange();
    //   break;
  }

  return true;
});

module.exports = ContactStore;
