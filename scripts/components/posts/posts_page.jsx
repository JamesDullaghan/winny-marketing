var React = require('react');
var WebAPIUtils = require('../../utils/WebAPIUtils');
var PostStore = require('../../stores/PostStore');
var ErrorNotice = require('../../components/common/error_notice');
var $ = require('jquery');

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

  componentWillMount: function () {
    $('body').removeClass('home-page').addClass('blog-page');
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
    return (
      <div className="wrapper">
        {errors}
        <div className="blog container">
          <div className="row">
            <div id="blog-mansonry" className="blog-list">
              <PostsList posts={this.state.posts} />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

var PostItem = React.createClass({
  renderPostBody: function () {
    return {__html: this.props.post.short_body}
  },

  render: function () {
    return (
      <article className="post col-md-4 col-sm-6 col-xs-12">
        <div className="post-inner">
          <figure className="post-thumb">
            <Link to="post" params={{postId: this.props.post.id}}>
              <img src={this.props.post.featured_image_list_url} alt={this.props.post.title} />
            </Link>
          </figure>
          <div className="content">
            <h3 className="post-title">
              <Link to="post" params={{postId: this.props.post.id}}>
                {this.props.post.display_title}
              </Link>
            </h3>
            <div className="post-entry">
              <p dangerouslySetInnerHTML={this.renderPostBody()}/>
              <Link to="post" params={{postId: this.props.post.id}} className="read-more">
                Read More
                <i className="fa fa-long-arrow-right"></i>
              </Link>
            </div>

            <div className="meta">
              <ul className="meta-list list-inline">
                <li className="post-time post_date date updated">{this.props.post.published_date}</li>
                <li className="post-author">by {this.props.post.author}</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    )
  }
});

var PostsList = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.posts.map(function(post, index) {
          return <PostItem post={post} key={"post-" + index}/>
        })}
      </div>
    );
  }
});

module.exports = PostsPage;
