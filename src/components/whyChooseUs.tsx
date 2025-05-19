import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <!-- Section Title Start --> */}
            <div className="section-title">
              <h3 className="wow fadeInUp">Why Choose Us</h3>
              <h2 className="text-anime">Providing Solar Energy Solutions</h2>
            </div>
            {/* <!-- Section Title End --> */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            {/* <!-- Why Choose Item Start --> */}
            <div
              className="why-choose-item wow fadeInUp"
              data-wow-delay="0.25s"
            >
              <div className="why-choose-image">
                <Image
                  src="/images/whyus-1.jpg"
                  alt="why choose us img"
                  width={600}
                  height={554}
                />
              </div>

              <div className="why-choose-content">
                <div className="why-choose-icon">
                  <Image
                    src="/images/icon-whyus-1.svg"
                    alt="why choose us"
                    width={63}
                    height={61}
                  />
                </div>

                <h3>Efficiency & Power</h3>
                <p>
                  Ut ut eros risus. In luctus fringilla augue, eget ultricies
                  purus. Sed mauris a nisl.
                </p>
              </div>
            </div>
            {/* <!-- Why Choose Item End --> */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* <!-- Why Choose Item Start --> */}
            <div className="why-choose-item wow fadeInUp" data-wow-delay="0.5s">
              <div className="why-choose-image">
                <Image
                  src="/images/whyus-2.jpg"
                  alt="who choose us img"
                  width={600}
                  height={554}
                />
              </div>

              <div className="why-choose-content">
                <div className="why-choose-icon">
                  <Image
                    src="/images/icon-whyus-2.svg"
                    alt="why choose us img"
                    width={51}
                    height={61}
                  />
                </div>

                <h3>Trust & Warranty</h3>
                <p>
                  Ut ut eros risus. In luctus fringilla augue, eget ultricies
                  purus. Sed mauris a nisl.
                </p>
              </div>
            </div>
            {/* <!-- Why Choose Item End --> */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* <!-- Why Choose Item Start --> */}
            <div
              className="why-choose-item wow fadeInUp"
              data-wow-delay="0.75s"
            >
              <div className="why-choose-image">
                <Image
                  src="/images/whyus-3.jpg"
                  alt="why choose us"
                  width={600}
                  height={554}
                />
              </div>

              <div className="why-choose-content">
                <div className="why-choose-icon">
                  <Image
                    src="/images/icon-whyus-3.svg"
                    alt="why choose us"
                    width={50}
                    height={60}
                  />
                </div>

                <h3>High Quality Work</h3>
                <p>
                  Ut ut eros risus. In luctus fringilla augue, eget ultricies
                  purus. Sed mauris a nisl.
                </p>
              </div>
            </div>
            {/* <!-- Why Choose Item End --> */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* <!-- Why Choose Item Start --> */}
            <div className="why-choose-item wow fadeInUp" data-wow-delay="1.0s">
              <div className="why-choose-image">
                <Image
                  src="/images/whyus-4.jpg"
                  alt="why choose us"
                  width={600}
                  height={554}
                />
              </div>

              <div className="why-choose-content">
                <div className="why-choose-icon">
                  <Image
                    src="/images/icon-whyus-4.svg"
                    alt="why choose us"
                    width={60}
                    height={60}
                  />
                </div>

                <h3>24*7 Support</h3>
                <p>
                  Ut ut eros risus. In luctus fringilla augue, eget ultricies
                  purus. Sed mauris a nisl.
                </p>
              </div>
            </div>
            {/* <!-- Why Choose Item End --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
