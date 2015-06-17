var React = require('react');

var TeamItem = require('./team_item');

var TeamList = React.createClass({
  displayName: 'List of Team Members',

  render: function () {
    console.log(this.props);
    console.log(this.state.team);
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
