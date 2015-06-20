var React = require('react');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var WebAPIUtils = require('../utils/WebAPIUtils');
var ContactActionCreators = require('../actions/ContactActionCreators');

var Contact = React.createClass({
  displayName: 'Contact Page',

  _onSubmit: function (e) {
    e.preventDefault();
    var name = this.refs.fullName.getDOMNode().value;
    var email = this.refs.email.getDOMNode().value;
    var phone = this.refs.phone.getDOMNode().value;
    var subject = this.refs.subject.getDOMNode().value;
    var message = this.refs.message.getDOMNode().value;
    ContactActionCreators.createContact(name, email, phone, subject, message);
  },

  render: function () {
    return (
      <div className="wrapper">
        <div className="headline-bg contact-headline-bg"></div>
        <section className="contact-section section section-on-bg">
          <div className="container">
            <h2 className="title text-center">Contact Us</h2>
            <p className="intro text-center">We would love to hear from you.</p>
            <form className="contact-form" onSubmit={this._onSubmit}>
              <div className="row text-center">
                <div className="contact-form-inner col-md-8 col-sm-12 col-xs-12 col-md-offset-2 col-sm-offset-0 xs-offset-0">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                      <label htmlFor="fullName" className="sr-only">Your Name</label>
                      <input ref="fullName" className="form-control" type="text" minlength="2" name="fullName" placeholder="Your name" required />
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                      <label htmlFor="email" className="sr-only">Email address</label>
                      <input ref="email" type="email" name="email" className="form-control" placeholder="Your email address" required />
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                      <label htmlFor="phone" className="sr-only">Phone</label>
                      <input ref="phone" type="text" placeholder="Your phone number" required className="form-control" />
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                      <label htmlFor="subject" className="sr-only">Subject</label>
                      <select ref="subject" className="form-control" required>
                        <option value="contact">Feedback</option>
                        <option value="booking">Booking Information</option>
                        <option value="information">Question/Concern</option>
                      </select>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                      <label htmlFor="message" className="sr-only">Your message</label>
                      <textarea ref="message" id="message" className="form-control" name="message" placeholder="Enter your message" required rows="12"></textarea>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                      <button className="btn btn-block btn-cta btn-cta-primary" type="submit">Send Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    )
  }
});

module.exports = Contact;
