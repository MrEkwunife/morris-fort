import Image from "next/image";

export default function InfoBar() {
  return (
    <div className="infobar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="cta-box">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  {/* CTA Image Start */}
                  <div className="cta-image">
                    <figure className="image-anime">
                      <Image
                        src="/images/cta-image.jpg"
                        alt="Contact support representative"
                        width={400}
                        height={250}
                      />
                    </figure>
                  </div>
                  {/* CTA Image End */}
                </div>

                <div className="col-lg-8">
                  {/* CTA Content Start */}
                  <div className="cta-content">
                    <div className="phone-icon">
                      <figure>
                        <Image
                          src="/images/icon-cta-phone.svg"
                          alt="Phone icon"
                          width={50}
                          height={50}
                        />
                      </figure>
                    </div>
                    <h3 className="text-anime">
                      Have Questions? <span>Call Us</span> 800-001-658
                    </h3>
                    <p className="wow fadeInUp" data-wow-delay="0.25s">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  {/* CTA Content End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
