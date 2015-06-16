var React = require('react');
var Icon = require('./icon');
var Router = require('react-router');
var Link = Router.Link;

var FooterLinks = React.createClass({
  displayName: 'Footer Links Component',

  render: function () {
    return (
      <ul className="list-unstyled">
        <li>
          <Link to="about">
            <Icon iconType="fa-caret-right" />
            Who we are
          </Link>
        </li>
        <li>
          <Link to="posts">
            <Icon iconType="fa-caret-right" />
            Blog
          </Link>
        </li>
        <li>
          <Link to="contact">
            <Icon iconType="fa-caret-right" />
            Contact us
          </Link>
        </li>
      </ul>
    )
  }
});

module.exports = FooterLinks;
