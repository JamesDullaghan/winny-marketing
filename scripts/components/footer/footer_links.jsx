var React = require('react');
var Icon = require('./icon');

var FooterLinks = React.createClass({
  displayName: 'Footer Links Component',

  render: function () {
    return (
      <ul className="list-unstyled">
        <li>
          <a href="#">
            <Icon iconType="fa-caret-right" />
            Who we are
          </a>
        </li>
        <li>
          <a href="#">
            <Icon iconType="fa-caret-right" />
            Press
          </a>
        </li>
        <li>
          <a href="#">
            <Icon iconType="fa-caret-right" />
            Blog
          </a>
        </li>
        <li>
          <a href="#">
            <Icon iconType="fa-caret-right" />
            Jobs
          </a>
        </li>
        <li>
          <a href="#">
            <Icon iconType="fa-caret-right" />
            Contact us
          </a>
        </li>
      </ul>
    )
  }
});

module.exports = FooterLinks;
