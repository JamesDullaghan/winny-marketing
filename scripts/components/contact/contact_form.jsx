var React = require('react');
var AppDispatcher = require('../../dispatcher/AppDispatcher');
var AppConstants = require('../../constants/AppConstants');
var WebAPIUtils = require('../../utils/WebAPIUtils');
var ContactActionCreators = require('../../actions/ContactActionCreators');

var ErrorNotice = require('../../components/common/error_notice');

var ContactForm = React.createClass({
  displayName: 'Contact Form',
  getInitialState: function() {
    return {errors: ''};
  },

  getValue: function (refName) {
    return this.refs[refName].getDOMNode().value;
  },

  _onBlur: function(e){
    console.log(e.target);
    var value = this.getValue(e.target.name);
    var error;
    if (!value)
        error = 'This value is required';
    else if (value.length < 1)
        error = 'Please provide more information.';
    this.setState({ errors: [error] });
    e.ta
    console.log(this.state);
  },

  _onSubmit: function (e) {
    e.preventDefault();
    var name = this.getValue('fullName');
    var email = this.getValue('email');
    var phone = this.getValue('phone');
    var subject = this.getValue('subject');
    var message = this.getValue('message');
    ContactActionCreators.createContact(name, email, phone, subject, message);
  },

  render: function () {
    var errors = (this.state.errors.length > 0) ? <ErrorNotice errors={this.state.errors}/> : <div></div>;
    return (
      <form className="contact-form" onSubmit={this._onSubmit}>
        <div className="row text-center">
          <div className="contact-form-inner col-md-8 col-sm-12 col-xs-12 col-md-offset-2 col-sm-offset-0 xs-offset-0">
            {errors}
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                <label htmlFor="fullName" className="sr-only">Your Name</label>
                <input onBlur={this._onBlur} ref="fullName" className="form-control" type="text" minlength="2" name="fullName" placeholder="Your name" required />
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
    )
  }

});

module.exports = ContactForm;
