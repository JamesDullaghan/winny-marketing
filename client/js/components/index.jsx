var React = require('react');
var Header = require('../components/header/header');
var Footer = require('../components/footer/footer');

var Index = React.createClass({
  displayName: 'index Component',

  render: function () {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    )
  }
});

module.exports = Index;
