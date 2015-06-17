var AppDispatcher = require('../dispatcher/AppDispatcher.js');

var AppConstants = require('../constants/AppConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {
  loadProfile: function () {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_PROFILE
    });
    WebAPIUtils.loadProfile();
  }
};
