var React = require('react');
var ContactForm = require('./contact/contact_form');

var Contact = React.createClass({
  displayName: 'Contact Page',

  render: function () {
    return (
      <div className="wrapper">
        <div className="headline-bg contact-headline-bg"></div>
        <section className="contact-section section section-on-bg">
          <div className="container">
            <h2 className="title text-center">Contact Us</h2>
            <p className="intro text-center">We would love to hear from you.</p>
            <ContactForm/>
          </div>
        </section>
      </div>
    )
  }
});

module.exports = Contact;
