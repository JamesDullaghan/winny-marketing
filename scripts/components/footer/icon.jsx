var React = require('react');

var Icon = React.createClass({

  render: function () {
    return (
      <i className="fa {this.props.iconType}"/>
    )
  }
});

module.exports = Icon;
