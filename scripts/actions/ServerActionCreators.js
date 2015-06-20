var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {
  receivePosts: function (json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_POSTS,
      json: json
    });
  },

  receivePost: function (json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_POST,
      json: json
    });
  },

  receiveProfile: function (json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_PROFILE,
      json: json
    });
  },

  receiveTeam: function (json) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_TEAM,
      json: json
    });
  },

  receiveCreatedContact: function (json, errors) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_CREATED_CONTACT,
      json: json,
      errors: errors
    });
  }

}
