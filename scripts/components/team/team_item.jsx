var React = require('react');

var TeamItem = React.createClass({
  displayName: 'Team Member',

  render: function () {
    return (
      <div className="member col-md-6 col-sm-6 col-xs-12">
        <div className="member-inner">
          <figure className="profile">
            <img src="http://placehold.it/400/400" className="img-responsive" />
            <figcaption className="info">
              <span className="name">James Dullaghan</span>
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
