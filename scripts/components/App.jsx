var React = require('react');
var Header = require('../components/header/Header');

var App = React.createClass({
  displayName: 'App Component',

  componentWillMount: function () {

  },

  render: function () {
    return (
      <Header/>
    )
  }
});

module.exports = App;
