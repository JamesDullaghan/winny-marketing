var React = require('react');
var WebAPIUtils = require('../../utils/WebAPIUtils');
var PostStore = require('../../stores/PostStore');
var ErrorNotice = require('../../components/common/error_notice');

var Post = require('./post_page');

var PostActionCreators = require('../../actions/PostActionCreators');

var Router = require('react-router');
var Link = Router.Link;

var PostsPage = React.createClass({
  getInitialState: function () {
    return {
      posts: PostStore.getAllPosts(),
      errors: []
    };
  },

  componentDidMount: function () {
    PostStore.addChangeListener(this._onChange);
    PostActionCreators.loadPosts();
  },

  componentWillUnmount: function () {
    PostStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      posts: PostStore.getAllPosts(),
      errors: PostStore.getErrors()
    });
  },

  render: function () {
    var errors = (this.state.errors.length > 0) ? <ErrorNotice errors={this.state.errors}/> : <div></div>;
    // console.log(this.state);
    return (
      <div>
        {errors}
        <div className="row">
          <PostsList posts={this.state.posts} />
        </div>
      </div>
    );
  }
});


// <Link to="post" params={ {postId: this.props.post.id}}>
//   {this.props.post.title}
// </Link>
// function renderPostBody(postBody) {
//   return {__html: postBody }
// }

var PostItem = React.createClass({
  renderPostBody: function () {
    return {__html: this.props.post.short_body}
  },

  render: function () {
    return (
      <li className="post">
        <h1>{this.props.post.title}</h1>
        <p dangerouslySetInnerHTML={this.renderPostBody()} />
        <p>{this.props.post.author} - {this.props.post.published_date}</p>
      </li>
    );
  }
});

var PostsList = React.createClass({
  render: function () {
    // console.log(this.props);
    return (
      <ul className="col-lg-8 col-md-10 col-sm-12 col-lg-offset-2 col-md-offset-1">
        {this.props.posts.map(function(post, index) {
          return <PostItem post={post} key={"post-" + index}/>
        })}
      </ul>
    );
  }
});

module.exports = PostsPage;
