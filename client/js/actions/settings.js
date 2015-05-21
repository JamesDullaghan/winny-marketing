var Constants = require('../constants');
var Dispatcher = require('../dispatcher');

module.exports = {
  load: function (defaultSettings) {
    Dispatcher.dispatch({ action: Constants.SETTINGS_LOAD, data: defaultSettings });
  }
};
