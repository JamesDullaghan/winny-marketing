var React = require('react');
var Navigation = require('./navigation');
var MobileNavigation = require('./mobile_navigation');

var Header = React.createClass({
  displayName: "Header Component",

  render: function () {
    return (
      <header id="header" className="header navbar-fixed-top">
        <div className="container">
          <h1 className="logo">
            <a href="/">
              <span className="text">Winny.io</span>
            </a>
          </h1>
          <Navigation/>
        </div>
      </header>
    )
  }
});

module.exports = Header;
