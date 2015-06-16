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

  renderPostBody: function () {
    return {__html: this.state.post.body}
  },

  render: function () {
    return (
      <div className="wrapper">
        <div className="blog-entry-wrapper">
          <div className="blog-entry">
            <article className="post">
              <header style={{backgroundImage: 'url(' + this.state.post.main_url + ')'}} className="blog-entry-heading">
                <div className="container text-center">
                  <h2 className="title">{this.state.post.title}</h2>
                  <div className="meta">
                    <ul className="meta-list list-inline">
                      <li className="post-time">{this.state.post.published_date}</li>
                      <li className="post-author">by {this.state.post.author}</li>
                    </ul>
                  </div>
                </div>
              </header>
              <div className="container">
                <div className="row">
                  <div className="blog-entry-content col-md-8 col-sm-10 col-xs-12 col-md-offset-2 col-sm-offset-1 col-xs-offset-0">
                    <p dangerouslySetInnerHTML={this.renderPostBody()}/>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PostPage;
