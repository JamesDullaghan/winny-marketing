var React =  require('react');
var Router = require('react-router');
             require('../styles/main.css');
var Header = require('./components/header/header');
var Footer = require('./components/footer/footer');
var Index =  require('./components/index');
var About =  require('./components/about');
var Press =  require('./components/press');
var Blog =   require('./components/blog');
var Jobs =   require('./components/jobs');
var Contact =   require('./components/contact');
var Posts = require('./components/posts/posts_page');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  displayName: 'App Component',

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
    <Route name="about" handler={About}/>
    <Route name="press" handler={Press}/>
    <Route name="blog" handler={Blog}/>
    <Route name="jobs" handler={Jobs}/>
    <Route name="posts" handler={Posts}/>
    <Route name="contact" handler={Contact}/>
    <DefaultRoute handler={Index}/>
  </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('content'))
});

module.exports = App;
