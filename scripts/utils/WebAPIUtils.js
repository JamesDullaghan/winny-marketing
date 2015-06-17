var ServerActionCreators = require('../actions/ServerActionCreators');
var AppConstants = require('../constants/AppConstants');
var request = require('superagent');

function _getErrors(res) {
  var errorMsgs = ["Something went wrong, please try again"];
  if ((json = JSON.parse(res.text))) {
    if (json['errors']) {
      errorMsgs = json['errors'];
    } else if (json['errors']) {
      errorMsgs = [json['error']];
    }
  }
  return errorMsgs;
}

var APIEndpoints = AppConstants.APIEndpoints;

module.exports = {
  loadPosts: function () {
    // POSTS endpoint requires facilityId
    request.get(APIEndpoints.POSTS)
      .set('Accept', 'application/json')
      // No access token required for public posts
      // .set('Authorization', sessionStorage.getItem('accessToken'))
      .end(function(error, res) {
        json = JSON.parse(res.text);
        ServerActionCreators.receivePosts(json);
      });
  },

  loadPost: function (postId) {
    // POST endpoint does not require facilityId
    request.get(APIEndpoints.POST + '/' + postId)
      .set('Accept', 'application/json')
      // No access token required for public post
      // .set('Authorization', sessionStorage.getItem('accessToken))
      .end(function(error, res) {
        if (res) {
          json = JSON.parse(res.text);
          ServerActionCreators.receivePost(json);
        }
      });
  },

  loadProfile: function () {
    request.get(APIEndpoints.PROFILE)
      .set('Accept', 'application/json')
      .end(function(error, res) {
        json = JSON.parse(res.text);
        ServerActionCreators.receiveProfile(json);
      });
  },

  loadTeam: function () {
    request.get(APIEndpoints.TEAM)
      .set('Accept', 'application/json')
      .end(function(error, res) {
        json = JSON.parse(res.text);
        ServerActionCreators.receiveTeam(json);
      });
  }


}
