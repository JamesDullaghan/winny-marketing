var React = require('react');

var ServiceItem = require('../services/service_item');

var ServiceList = React.createClass({
  displayName: 'List of Services',

  render: function () {
    return (
      <section className="faq section has-bg-color">
        <div className="container">
          <h2 className="title text-center">
            {this.props.sectionTitle}
          </h2>
          <div className="row">
            <div className="col-md-8 col-sm-10 col-xs-12 col-md-offset-2 col-sm-offset-1 col-xs-offset-0">
              {this.props.services.map(function(service, index) {
                return <ServiceItem service={service} key={"service-" + index}/>
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = ServiceList;
