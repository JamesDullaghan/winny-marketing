var React = require('react');

var TeamIcon = React.createClass({
  render: function () {
    return (
      <li>
        <a href={this.props.url}>
          <i className="fa {this.props.icon}"></i>
        </a>
      </li>
    )
  }
});
