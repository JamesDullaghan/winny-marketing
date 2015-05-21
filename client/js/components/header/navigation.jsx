var React = require('react');

var Navigation = React.createClass({
  displayName: "Navigation Component",

  render: function () {
    return (
      <div id="navbar-collapse" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li className="active nav-item">
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
    )
  }
});

module.exports = Navigation;
