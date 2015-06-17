var React = require('react');

var TeamIcon = React.createClass({
  render: function () {
    var iconClass = "fa " + this.props.icon;
    return (
      <li>
        <a href={this.props.url}>
          <i className={iconClass}></i>
        </a>
      </li>
    )
  }
});

module.exports = TeamIcon;
