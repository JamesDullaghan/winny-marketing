var React = require('react');
var CaretIcon = require('./CaretIcon');

var FooterLinks = React.createClass({
  displayName: 'Footer Links Component',

  render: function () {
    return (
      <ul className="list-unstyled">
        <li>
          <a href="#">
            <CaretIcon/>
            Who we are
          </a>
        </li>
        <li>
          <a href="#">
            <CaretIcon/>
            Press
          </a>
        </li>
        <li>
          <a href="#">
            <CaretIcon/>
            Blog
          </a>
        </li>
        <li>
          <a href="#">
            <CaretIcon/>
            Jobs
          </a>
        </li>
        <li>
          <a href="#">
            <CaretIcon/>
            Contact us
          </a>
        </li>
      </ul>
    )
  }
});

module.exports = FooterLinks;
