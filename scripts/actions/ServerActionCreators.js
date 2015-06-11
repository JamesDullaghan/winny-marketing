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
  }
}
