var React = require('react');

var TeamList = require('../components/about/team_list');

var WebAPIUtils = require('../utils/WebAPIUtils');
var ProfileStore = require('../stores/ProfileStore');
var ProfileActionCreators = require('../actions/ProfileActionCreators');

var About = React.createClass({
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
              <TeamList/>
            </div>
          </div>
        </section>
      </div>

    )
  }
});

module.exports = About;
