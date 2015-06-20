var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

  createContact: function(name, email, phone, subject, message) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.CREATE_CONTACT,
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message
    });

    WebAPIUtils.createContact(name, email, phone, subject, message);
  }
};
