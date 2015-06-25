var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Navigation = React.createClass({
  displayName: "Navigation Component",

  render: function () {
    return (
      <nav className="top-bar" data-topbar>
        <ul className="title-area">
          <li className="name">
            <h1>
              <Link to="app">Your Pet Hotel</Link>
            </h1>
          </li>
          <li className="toggle-topbar menu-icon">
            <a href="#">
              <span></span>
            </a>
          </li>
        </ul>

        <section className="top-bar-section">
          <ul className="right">
            <li><Link to="app">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="services">Services</Link></li>
            <li><Link to="posts">Posts</Link></li>
            <li><Link to="contact">Contact</Link></li>
          </ul>
        </section>
      </nav>
    )
  }
});


module.exports = Navigation;
