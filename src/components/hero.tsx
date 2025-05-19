export default function Hero() {
  return (
    // <!-- Hero Section Start -->
    <div className="hero parallaxie">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            {/* <!-- Hero Left Content Start --> */}
            <div className="hero-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">Welcome to Solor</h3>
                <h1 className="text-anime">
                  Powering the Future With <span>Renewable.</span>
                </h1>
              </div>
              <div
                className="hero-content-body wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <p>
                  Duis ultricies, tortor a accumsan fermentum, purus diam mollis
                  velit, eu bibendum ipsum erat quis leo. Vestibulum finibus,
                  leo dapibus feugiat rutrum, augue lacus rhoncus velit, vel
                  scelerisque odio est.
                </p>
              </div>

              <div
                className="hero-content-footer wow fadeInUp"
                data-wow-delay="0.75s"
              >
                <a href="#" className="btn-default">
                  Our Services
                </a>
                <a href="#" className="btn-default btn-border">
                  Contact Now
                </a>
              </div>
            </div>
            {/* <!-- Hero Left Content End --> */}
          </div>
        </div>
      </div>
    </div>
    // <!-- Hero Section End -->
  );
}
