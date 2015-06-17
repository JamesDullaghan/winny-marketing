var React = require('react');

var TeamList = require('../components/team/team_list');

var WebAPIUtils = require('../utils/WebAPIUtils');
var TeamStore = require('../stores/TeamStore');
var TeamActionCreators = require('../actions/TeamActionCreators');

var About = React.createClass({
  getInitialState: function () {
    return {
      team: TeamStore.getTeam(),
      errors: []
    };
  },

  componentDidMount: function () {
    TeamStore.addChangeListener(this._onChange);
    TeamActionCreators.loadTeam();
  },

  componentWillUnmount: function () {
    TeamStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      team: TeamStore.getTeam(),
      errors: TeamStore.getErrors()
    });
  },

  render: function () {
    return (
      <div>
        <div className="headline-bg about-headline-bg"></div>
        <section className="story-section section section-on-bg">
          <h2 className="title container text-center">About Us</h2>
          <div className="story-container container text-center">
            <div className="story-container-inner">
              <div className="about">
                <p>All about us text goes here</p>
                <p>Some more text goes here</p>
                <blockquote className="belife">Some other stuff goes here</blockquote>
              </div>
              <TeamList team={this.state.team}/>
            </div>
          </div>
        </section>
      </div>

    )
  }
});

module.exports = About;
