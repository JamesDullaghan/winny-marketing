var React = require('react');

var MobileNavigation = React.createClass({
  displayName: "Mobile Navigation Component",

  render: function () {
    return (
      <nav className="main-nav navbar-right" role="navigation">
        <div className="navbar-header">
          <button className="navbar-toggle" type="button">
            <span className="sr-only">Toggle Navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
      </nav>
    )
  }
});

module.exports = MobileNavigation;
