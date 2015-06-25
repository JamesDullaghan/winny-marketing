var React =  require('react');
var ReactRouter = require('react-router');
             require('../styles/style.scss');
var Header = require('./components/header/header');
var Footer = require('./components/footer/footer');
var Index =  require('./components/index');
var About =  require('./components/about');
var Contact =   require('./components/contact');
var Posts = require('./components/posts/posts_page');
var Post = require('./components/posts/post_page');
var Services = require('./components/services');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var DefaultRoute = ReactRouter.DefaultRoute;

var $ = require('jquery');

var App = React.createClass({
  displayName: 'App Component',

  componentWillMount: function () {
    $(window).on('scroll load', function() {
      if ($(window).scrollTop() > 0) {
        $('#header').addClass('scrolled');
      } else {
        $('#header').removeClass('scrolled');
      }
    });
  },

  render: function () {
    return (
      <div>
        <Header/>
        <RouteHandler/>
        <Footer/>
      </div>
    )
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="about" handler={About} activeClassName="active" />
    <Route name="posts" path="/posts" handler={Posts} activeClassName="active" />
    <Route name="post" path="/posts/:postId" handler={Post} activeClassName="active" />
    <Route name="contact" handler={Contact} activeClassName="active" />
    <Route name="services" handler={Services} activeClassName="active"/>
    <DefaultRoute handler={Index}/>
  </Route>
)

ReactRouter.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('content'))
});

module.exports = App;
