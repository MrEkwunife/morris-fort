import Image from "next/image";

export default function About() {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* <!-- About us Image Start --> */}
            <div className="about-image">
              <div className="about-img-1">
                <figure className="reveal image-anime">
                  <Image
                    src="/images/about-1.jpg"
                    alt="About Img"
                    width={600}
                    height={582}
                  />
                </figure>
              </div>

              <div className="about-img-2">
                <figure className="reveal image-anime">
                  <Image
                    src="/images/about-2.jpg"
                    alt="About Img2"
                    width={500}
                    height={394}
                  />
                </figure>
              </div>
            </div>
            {/* <!-- About us Image End --> */}
          </div>

          <div className="col-lg-6">
            {/* <!-- Section Title Start --> */}
            <div className="section-title">
              <h3 className="wow fadeInUp">About Us</h3>
              <h2 className="text-anime">About Green Energy Solar</h2>
            </div>
            {/* <!-- Section Title End --> */}

            {/* <!-- About us Content Start --> */}
            <div className="about-content wow fadeInUp" data-wow-delay="0.25s">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled.
              </p>

              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>

              <ul>
                <li>Solar Inverter Setup</li>
                <li>Battery Storage Solutions</li>
                <li>Solar Material Financing</li>
                <li>24 X 7 Call & Chat Support</li>
              </ul>

              <a href="#" className="btn-default">
                More About
              </a>
            </div>
            {/* <!-- About us Content End --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
