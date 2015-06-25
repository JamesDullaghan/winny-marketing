var keyMirror = require('keymirror');

// @todo CHANGE THIS IF IN PRODUCTION
// @todo SET TO FACILITY ID OF FACILITY IN PRODUCTION
var production = false;
var facilityId = 1;

if (production) {
  var APIRoot =  'http://api.winny.io/'
} else {
  var APIRoot = 'http://localhost:3002/'
}

module.exports = {
  Settings: {
    production: production,
    facilityId: facilityId,
    APIRoot: APIRoot
  },

  APIEndpoints: {
    POSTS: APIRoot + "v1/posts?facility_id=" + facilityId,
    POST: APIRoot + "v1/posts",
    PROFILE: APIRoot + "v1/profile?facility_id=" + facilityId,
    TEAM: APIRoot + "v1/team?facility_id=" + facilityId,
    CONTACTS: APIRoot + "v1/contacts?facility_id=" + facilityId,
    SERVICES: APIRoot + "v1/services?facility_id=" + facilityId,
    SERVICE: APIRoot + "v1/services",

  },

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  ActionTypes: keyMirror({
    LOAD_POSTS: null,
    RECEIVE_POSTS: null,
    LOAD_POST: null,
    RECEIVE_POST: null,
    LOAD_PROFILE: null,
    RECEIVE_PROFILE: null,
    LOAD_TEAM: null,
    RECEIVE_TEAM: null,
    CREATE_CONTACT: null,
    LOAD_SERVICES: null,
    RECEIVE_SERVICES: null,
    LOAD_SERVICE: null,
    RECEIVE_SERVICE: null
  })
};
