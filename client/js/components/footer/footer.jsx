var React = require('react');
var FooterLinks = require('./footer_links');

var Footer = React.createClass({

  displayName: 'Footer Component',

  render: function () {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row">
              <div className="footer-col links col-md-2 col-sm-4 col-xs-12">
                <div className="footer-col-inner">
                  <h3 className="title">About us</h3>
                  <FooterLinks/>
                </div>
                <div className="footer-col-inner">
                  <h3 className="title">Product</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

});

module.exports = Footer;
