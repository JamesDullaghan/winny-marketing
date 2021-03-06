var React = require('react');

var TeamIcon = require('./team_icon');

var TeamItem = React.createClass({
  displayName: 'Team Member',

  render: function () {
    return (
      <div className="member col-md-6 col-sm-6 col-xs-12">
        <div className="member-inner">
          <figure className="profile">
            <img src={this.props.member.image_main_url} className="img-responsive" />
            <figcaption className="info">
              <span className="name">{this.props.member.full_name}</span>
              <br/>
              <span className="job-title">Co-Founder</span>
            </figcaption>
          </figure>
          <div className="social">

            <ul className="social-list list-inline">
              <TeamIcon url="http://example.com" icon="fa-linkedin" />
              <TeamIcon url="http://example.com" icon="fa-twitter" />
              <TeamIcon url="http://example.com" icon="fa-facebook" />
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TeamItem;
