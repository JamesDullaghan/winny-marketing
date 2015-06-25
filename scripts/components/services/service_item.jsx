var React = require('react');
var $ = require('jquery');

var ServiceItem = React.createClass({
  displayName: 'Service Item',

  _onClick: function (e) {
    e.preventDefault();
    $(e.target).find('.panel-collapse').removeClass('panel-collapse');
  },

  render: function () {
    return (
      <div className="panel">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a onClick={this._onClick} className="panel-toggle">
              <h3>{this.props.service.name}</h3>
            </a>
          </h4>
        </div>
        <div className="panel-collapse">
          <div className="panel-body">
            <p>{this.props.service.description}</p>
            <b>{this.props.service.display_price}</b>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ServiceItem;
