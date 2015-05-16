var React = require('react');
var Header = require('../components/header/Header');
var Footer = require('../components/footer/Footer');

var App = React.createClass({
  displayName: 'App Component',

  render: function () {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    )
  }
});

module.exports = App;
