import Image from "next/image";

export default function OurServices() {
  return (
    <div className="our-services">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <!-- Section Title Start --> */}
            <div className="section-title">
              <h3 className="wow fadeInUp">Our Services</h3>
              <h2 className="text-anime">Best Offer For Renewable Energy</h2>
            </div>
            {/* <!-- Section Title End --> */}
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            {/* <!-- Services Slider Start --> */}
            <div className="services-slider">
              <div className="swiper">
                <div className="swiper-wrapper">
                  {/* <!-- Service Slide Start --> */}
                  <div className="swiper-slide">
                    <div className="service-item">
                      <div className="service-image">
                        <figure>
                          <Image
                            src="/images/service-1.jpg"
                            alt="service img"
                            width={800}
                            height={962}
                          />
                        </figure>

                        <div className="service-icon">
                          <Image
                            src="images/icon-service-1.svg"
                            alt="icon"
                            width={50}
                            height={50}
                          />
                        </div>
                      </div>

                      <div className="service-content">
                        <h3>Solar Maintenance</h3>
                        <p>
                          Aenean mattis mauris turpis, quis porta magna aliquam
                          eu. Nulla consectetur.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Service Slide End --> */}

                  {/* <!-- Service Slide Start --> */}
                  <div className="swiper-slide">
                    <div className="service-item">
                      <div className="service-image">
                        <figure>
                          <Image
                            src="/images/service-2.jpg"
                            alt="service img"
                            height={800}
                            width={962}
                          />
                        </figure>

                        <div className="service-icon">
                          <Image
                            src="/images/icon-service-2.svg"
                            alt="icon"
                            width={50}
                            height={50}
                          />
                        </div>
                      </div>

                      <div className="service-content">
                        <h3>Energy Saving Devices</h3>
                        <p>
                          Aenean mattis mauris turpis, quis porta magna aliquam
                          eu. Nulla consectetur.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Service Slide End --> */}

                  {/* <!-- Service Slide Start --> */}
                  <div className="swiper-slide">
                    <div className="service-item">
                      <div className="service-image">
                        <figure>
                          <Image
                            src="/images/service-3.jpg"
                            alt="service img"
                            width={800}
                            height={962}
                          />
                        </figure>

                        <div className="service-icon">
                          <Image
                            src="/images/icon-service-3.svg"
                            alt="service img"
                            width={50}
                            height={50}
                          />
                        </div>
                      </div>

                      <div className="service-content">
                        <h3>Solar Solutions</h3>
                        <p>
                          Aenean mattis mauris turpis, quis porta magna aliquam
                          eu. Nulla consectetur.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Service Slide End --> */}

                  {/* <!-- Service Slide Start --> */}
                  <div className="swiper-slide">
                    <div className="service-item">
                      <div className="service-image">
                        <figure>
                          <Image
                            src="/images/service-2.jpg"
                            alt="service img"
                            width={800}
                            height={962}
                          />
                        </figure>

                        <div className="service-icon">
                          <Image
                            src="/images/icon-service-2.svg"
                            alt="service img"
                            width={50}
                            height={50}
                          />
                        </div>
                      </div>

                      <div className="service-content">
                        <h3>Energy Saving Devices</h3>
                        <p>
                          Aenean mattis mauris turpis, quis porta magna aliquam
                          eu. Nulla consectetur.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Service Slide End --> */}
                </div>

                <div className="swiper-pagination"></div>
              </div>
            </div>
            {/* <!-- Services Slider End --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
