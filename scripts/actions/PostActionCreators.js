var AppDispatcher = require('../dispatcher/AppDispatcher.js');

var AppConstants = require('../constants/AppConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {
  loadPosts: function () {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_POSTS
    });
    WebAPIUtils.loadPosts();
  },

  loadPost: function(postId) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_POST,
      postId: postId
    });
    WebAPIUtils.loadPost(postId);
  }
};
