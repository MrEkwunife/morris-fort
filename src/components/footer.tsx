import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <FooterTicker />
      <footer className="main-footer">
        {/* <!-- Footer Contact Start --> */}
        <div className="footer-contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                {/* <!-- Footer Contact Box Start --> */}
                <div
                  className="footer-contact-box wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <div className="contact-icon-box">
                    <Image
                      src="/images/icon-email.svg"
                      alt=""
                      width={36}
                      height={40}
                    />
                  </div>

                  <div className="footer-contact-info">
                    <h3>Support & Email</h3>
                    <p>info@domainname.com</p>
                  </div>
                </div>
                {/* <!-- Footer Contact Box End --> */}
              </div>

              <div className="col-lg-4">
                {/* <!-- Footer Contact Box Start --> */}
                <div
                  className="footer-contact-box wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="contact-icon-box">
                    <Image
                      src="/images/icon-phone.svg"
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>

                  <div className="footer-contact-info">
                    <h3>Customer Support</h3>
                    <p>+01 547 547 5478</p>
                  </div>
                </div>
                {/* <!-- Footer Contact Box End --> */}
              </div>

              <div className="col-lg-4">
                {/* <!-- Footer Contact Box Start --> */}
                <div
                  className="footer-contact-box wow fadeInUp"
                  data-wow-delay="0.75s"
                >
                  <div className="contact-icon-box">
                    <Image
                      src="/images/icon-location.svg"
                      alt=""
                      width={27}
                      height={40}
                    />
                  </div>

                  <div className="footer-contact-info">
                    <h3>Our Location</h3>
                    <p>Street no, City, Country 123456</p>
                  </div>
                </div>
                {/* <!-- Footer Contact Box End --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Contact End --> */}

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <!-- Mega Footer Start --> */}
              <div className="mega-footer">
                <div className="row">
                  <div className="col-lg-3 col-md-12">
                    {/* <!-- Footer About Start --> */}
                    <div className="footer-about">
                      <figure>
                        <Image
                          src="/images/footer-logo.svg"
                          alt=""
                          width={158}
                          height={69}
                        />
                      </figure>
                      <p>
                        Green Energy is a long established fact that a reader
                        will be distracted by the readable content of a page
                        when.
                      </p>
                    </div>
                    {/* <!-- Footer About End --> */}

                    {/* <!-- Footer Social Link Start --> */}
                    <div className="footer-social-links">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Footer Social Link End --> */}
                  </div>

                  <div className="col-lg-3 col-md-4">
                    {/* <!-- Footer Links Start --> */}
                    <div className="footer-links">
                      <h2>Quick Links</h2>
                      <ul>
                        <li>
                          <Link href="#">Home</Link>
                        </li>
                        <li>
                          <Link href="#">About Us</Link>
                        </li>
                        <li>
                          <Link href="#">Services</Link>
                        </li>
                        <li>
                          <Link href="#">Blog</Link>
                        </li>
                        <li>
                          <Link href="#">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Footer Links End --> */}
                  </div>

                  <div className="col-lg-3 col-md-4">
                    {/* <!-- Footer Links Start --> */}
                    <div className="footer-links">
                      <h2>Services</h2>
                      <ul>
                        <li>
                          <Link href="#">Consultancy</Link>
                        </li>
                        <li>
                          <Link href="#">Solar System</Link>
                        </li>
                        <li>
                          <Link href="#">Solar Panel</Link>
                        </li>
                        <li>
                          <Link href="#">Style Guide</Link>
                        </li>
                        <li>
                          <Link href="#">License</Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Footer Links End --> */}
                  </div>

                  <div className="col-lg-3 col-md-4">
                    {/* <!-- Footer Links Start --> */}
                    <div className="footer-links">
                      <h2>Useful Links</h2>
                      <ul>
                        <li>
                          <Link href="#">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href="#">Term & Conditions</Link>
                        </li>
                        <li>
                          <Link href="#">Warranty</Link>
                        </li>
                        <li>
                          <Link href="#">Support</Link>
                        </li>
                        <li>
                          <Link href="#">Damage Policy</Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Footer Links End --> */}
                  </div>
                </div>
              </div>
              {/* <!-- Mega Footer End --> */}

              {/* <!-- Copyright Footer Start --> */}
              <div className="footer-copyright">
                <div className="row">
                  <div className="col-md-12">
                    {/* <!-- Footer Copyright Content Start --> */}
                    <div className="footer-copyright-text">
                      <p>Copyright © 2024 Solor. All rights reserved.</p>
                    </div>
                    {/* <!-- Footer Copyright Content End --> */}
                  </div>
                </div>
              </div>
              {/* <!-- Copyright Footer End --> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function FooterTicker() {
  return (
    <div className="footer-ticker">
      <div className="scrolling-ticker">
        <div className="scrolling-ticker-box">
          <div className="scrolling-content">
            <span>Generate Your Own Power</span>
            <span>Reap the Returns</span>
            <span>Heal the World</span>
            <span>Efficiency & Power</span>
            <span>24*7 Support</span>
          </div>

          <div className="scrolling-content">
            <span>Generate Your Own Power</span>
            <span>Reap the Returns</span>
            <span>Heal the World</span>
            <span>Efficiency & Power</span>
            <span>24*7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
