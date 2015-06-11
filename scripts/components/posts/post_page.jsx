var React = require('react');

var WebAPIUtils = require('../../utils/WebAPIUtils');
var PostStore = require('../../stores/PostStore');
var PostActionCreators = require('../../actions/PostActionCreators');

var State = require('react-router').State;

var PostPage = React.createClass({

  mixins: [ State ],

  getInitialState: function () {
    return {
      post: PostStore.getPost(),
      errors: []
    };
  },

  componentDidMount: function () {
    PostStore.addChangeListener(this._onChange);
    PostActionCreators.loadPost(this.getParams().postId);
  },

  componentWillUnmount: function () {
    PostStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      post: PostStore.getPost(),
      errors: PostStore.getErrors()
    });
  },

  render: function () {
    return (
      <div className="row">
        <div className="post__title">{this.state.post.title}</div>
        <div className="post__body">{this.state.post.body}</div>
        <div className="post__author">{this.state.post.author}</div>
      </div>
    );
  }
});

module.exports = PostPage;
