import Image from "next/image";

export default function OurProocess() {
  return (
    <div className="our-process">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <!-- Section Title Start --> */}
            <div className="section-title">
              <h3 className="wow fadeInUp">Our Latest Process</h3>
              <h2 className="text-anime">Our Work Process</h2>
            </div>
            {/* <!-- Section Title End --> */}
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            {/* <!-- Step Item Start --> */}
            <div
              className="step-item step-1 wow fadeInUp"
              data-wow-delay="0.25s"
            >
              <div className="step-header">
                <div className="step-icon">
                  <figure>
                    <Image
                      src="images/icon-step-1.svg"
                      alt="process img"
                      width={55}
                      height={55}
                    />
                  </figure>
                  <span className="step-no">01</span>
                </div>
              </div>

              <div className="step-content">
                <h3>Project Planing</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            {/* <!-- Step Item End --> */}
          </div>

          <div className="col-md-4">
            {/* <!-- Step Item Start --> */}
            <div
              className="step-item step-2 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="step-header">
                <div className="step-icon">
                  <figure>
                    <Image
                      src="images/icon-step-2.svg"
                      alt="process img"
                      width={55}
                      height={55}
                    />
                  </figure>
                  <span className="step-no">02</span>
                </div>
              </div>

              <div className="step-content">
                <h3>Research & Analysis</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            {/* <!-- Step Item End --> */}
          </div>

          <div className="col-md-4">
            {/* <!-- Step Item Start --> */}
            <div className="step-item wow fadeInUp" data-wow-delay="0.75s">
              <div className="step-header">
                <div className="step-icon">
                  <figure>
                    <Image
                      src="images/icon-step-3.svg"
                      alt="process img 3"
                      width={55}
                      height={55}
                    />
                  </figure>
                  <span className="step-no">03</span>
                </div>
              </div>

              <div className="step-content">
                <h3>Solar Installation</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            {/* <!-- Step Item End --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
