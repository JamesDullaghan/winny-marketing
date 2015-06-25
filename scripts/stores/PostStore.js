var AppDispatcher = require('../dispatcher/AppDispatcher.js');

var AppConstants = require('../constants/AppConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _posts = [];
var _errors = [];
var _post = {
  id: "",
  author: "",
  title: "",
  published_date: "",
  body: "",
  display_body: "",
  meta_keywords: "",
  meta_description: "",
  short_body: "",
  slug: "",
  featured_image_main_url: "",
  featured_image_list_url: "",
  featured_image_thumb_url: ""
}

var PostStore = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAllPosts: function () {
    return _posts;
  },

  getPost: function () {
    return _post;
  },

  getErrors: function () {
    return _errors;
  }

});

PostStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    case ActionTypes.RECEIVE_POSTS:
      _posts = action.json.posts;
      PostStore.emitChange();
      break;

      case ActionTypes.RECEIVE_POST:
        if (action.json) {
          _post = action.json.post;
          _errors = [];
        }
        if (action.errors) {
          _errors = action.errors;
        }
        PostStore.emitChange();
        break;
  }

  return true;
});

module.exports = PostStore;
