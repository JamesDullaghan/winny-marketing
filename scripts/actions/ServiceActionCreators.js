var AppDispatcher = require('../dispatcher/AppDispatcher');

var AppConstants = require('../constants/AppConstants');

var WebAPIUtils = require('../utils/WebAPIUtils');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {
  loadServices: function () {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_SERVICES
    });
    WebAPIUtils.loadServices();
  },

  loadService: function (serviceId) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_SERVICE,
      serviceId: serviceId
    });
    WebAPIUtils.loadService(serviceId);
  }
};
