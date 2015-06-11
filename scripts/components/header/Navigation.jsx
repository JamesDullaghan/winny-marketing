var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Navigation = React.createClass({
  displayName: "Navigation Component",

  render: function () {
    return (
      <div id="navbar-collapse" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li className="active nav-item">
            <Link to="app">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="about">Who we are</Link>
          </li>
          <li className="nav-item">
            <Link to="press">Press</Link>
          </li>
          <li className="nav-item">
            <Link to="blog">Blog</Link>
          </li>
          <li className="nav-item">
            <Link to="posts">Posts</Link>
          </li>
          <li className="nav-item">
            <Link to="jobs">Jobs</Link>
          </li>
          <li className="nav-item">
            <Link to="contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    )
  }
});

module.exports = Navigation;
