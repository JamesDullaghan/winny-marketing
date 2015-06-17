var React = require('react');

var TeamItem = require('../components/team/team_item');

var WebAPIUtils = require('../utils/WebAPIUtils');
var TeamStore = require('../stores/TeamStore');
var TeamActionCreators = require('../actions/TeamActionCreators');

var TeamList = React.createClass({
  displayName: 'List of Team Members',

  render: function () {
    return (
      <div className="team row">
        <h3 className="title">Meet The Team</h3>
        {this.props.team.map(function(member, index) {
          return <TeamItem member={member} key={"member-" + index}/>
        })}
      </div>
    )
  }
});

module.exports = TeamList;
