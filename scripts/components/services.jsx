var React = require('react');
var WebAPIUtils = require('../utils/WebAPIUtils');
var ServiceStore = require('../stores/ServiceStore');
var ErrorNotice = require('../components/common/error_notice');
var ServiceActionCreators = require('../actions/ServiceActionCreators');

var $ = require('jquery');

var ServiceList = require('./services/service_list');


var Services = React.createClass({
  displayName: 'Services Page',

  getInitialState: function () {
    return {
      services: ServiceStore.getAllServices(),
      errors: []
    };
  },

  componentWillMount: function () {
    $('body').removeClass('home-page').addClass('blog-page');
  },

  componentDidMount: function () {
    ServiceStore.addChangeListener(this._onChange);
    ServiceActionCreators.loadServices();
  },

  componentWillUnmount: function () {
    ServiceStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      services: ServiceStore.getAllServices(),
      errors: ServiceStore.getErrors()
    });
  },

  render: function () {
    return (
      <div className="wrapper">
        <div className="headline-bg blog-headline-bg"></div>
        <section className="services-section section section-on-bg">
          <div className="container">
            <h2 className="title text-center">Services</h2>
            <p className="intro text-center">We are a certified pet boarding and daycare service provider</p>
            <ServiceList services={this.state.services} sectionTitle="Something"/>
          </div>
        </section>
      </div>
    )
  }
});

module.exports = Services;
