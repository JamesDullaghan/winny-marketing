var React = require('react');
var Navigation = require('./Navigation');
var MobileNavigation = require('./MobileNavigation');

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
          <MobileNavigation/>
          <Navigation/>
        </div>
      </header>
    )
  }
});

module.exports = Header;
