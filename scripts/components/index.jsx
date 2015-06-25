var React = require('react');

var Index = React.createClass({
  render: function () {
    return (
      <div>
        <div className="bg-slider-wrapper">
          <div className="flexslider bg-slider">
            <ul className="slider">
              <li className="slide slide-1"></li>
              <li className="slide slide-2"></li>
            </ul>
          </div>
        </div>

        <section className="promo section section-on-bg">
          <div className="container text-center">
            <h2 className="title">
              Everything your pet
              <br/>
              business needs to get online!
            </h2>

            <p className="intro">
              Get in front of customers in a way that matters
              <br/>
              Fast. Affordable. Fully Responsive Website
            </p>
          </div>
        </section>
        <div className="sections-wrapper">
          <section className="section-why">
            <div className="container">
              <h2 className="title text-center">How Will Winny Help You?</h2>
              <p className="intro text-center">We want to help grow your pet business online. Our focus is on delivering quality website designs to engage and convert more customers.</p>
              <div className="row item">
                <div className="content col-md-4 col-sm-12 col-xs-12">
                  <h3 className="title">New Customers Through Design</h3>
                  <div className="desc">
                    <p>Are customers leaving your website for competitors? All of our themes are carefully crafted to help increase conversions through engagement and providing a great user experience.</p>
                    <p>We help you develop the right content, from text to images, which will effectively communicate your pet business to your customers.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
});

module.exports = Index;
