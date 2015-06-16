var React =  require('react');
var ReactRouter = require('react-router');
// var BrowserHistory = require('react-router/lib/BrowserHistory');
             require('../styles/main.css');
var Header = require('./components/header/header');
var Footer = require('./components/footer/footer');
var Index =  require('./components/index');
var About =  require('./components/about');
var Contact =   require('./components/contact');
var Posts = require('./components/posts/posts_page');
var Post = require('./components/posts/post_page');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var DefaultRoute = ReactRouter.DefaultRoute;


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
    <Route name="about" handler={About} activeClassName="active" />
    <Route name="posts" path="/posts" handler={Posts} activeClassName="active" />
    <Route name="post" path="/posts/:postId" handler={Post} activeClassName="active" />
    <Route name="contact" handler={Contact} activeClassName="active" />
    <DefaultRoute handler={Index}/>
  </Route>
)

ReactRouter.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('content'))
});

module.exports = App;
