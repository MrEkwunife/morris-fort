import Image from "next/image";
import Link from "next/link";

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface ContactInfoItemProps {
  title: string;
  content: React.ReactNode;
  image: string;
  icon: string;
  delay: string;
  socialLinks?: SocialLink[];
}

// Component for each contact information item
function ContactInfoItem({
  title,
  content,
  image,
  icon,
  delay,
  socialLinks,
}: ContactInfoItemProps) {
  return (
    <div className="col-lg-3 col-md-6">
      {/* Contact Info Item Start */}
      <div className="contact-info-item wow fadeInUp" data-wow-delay={delay}>
        <div className="contact-image">
          <figure className="image-anime">
            <Image
              src={image}
              alt={`${title} illustration`}
              width={300}
              height={400}
            />
          </figure>
        </div>

        <div className="contact-info-content">
          <h3>{title}</h3>
          {typeof content === "string" ? (
            <p dangerouslySetInnerHTML={{ __html: content }} />
          ) : socialLinks ? (
            <ul>
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url}>
                    <i className={link.icon}></i>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            content
          )}
        </div>

        <div className="contact-icon">
          <Image src={icon} alt={`${title} icon`} width={50} height={50} />
        </div>
      </div>
      {/* Contact Info Item End */}
    </div>
  );
}

// Main ContactInformation component
export default function ContactInformation() {
  // Social media links data
  const socialLinks: SocialLink[] = [
    { platform: "Facebook", url: "#", icon: "fa-brands fa-facebook-f" },
    { platform: "Twitter", url: "#", icon: "fa-brands fa-twitter" },
    { platform: "LinkedIn", url: "#", icon: "fa-brands fa-linkedin-in" },
    { platform: "Instagram", url: "#", icon: "fa-brands fa-instagram" },
  ];

  // Contact info items data
  const contactInfoItems: ContactInfoItemProps[] = [
    {
      title: "Our Addresses:",
      content: "123, Lorem Ipsum, Street no, City, Country 123456",
      image: "/images/location-img.jpg",
      icon: "/images/icon-location.svg",
      delay: "0.25s",
    },
    {
      title: "Emails:",
      content: "info@domainname.com<br />sales@domainname.com",
      image: "/images/email-img.jpg",
      icon: "/images/icon-mail.svg",
      delay: "0.5s",
    },
    {
      title: "Phones:",
      content: "(+0) 123 456 789<br />(+1) 456 123 789",
      image: "/images/phone-img.jpg",
      icon: "/images/icon-phone.svg",
      delay: "0.75s",
    },
    {
      title: "Follow Us:",
      content: null,
      image: "/images/follow-img.jpg",
      icon: "/images/icon-follow.svg",
      delay: "1.0s",
      socialLinks: socialLinks,
    },
  ];

  return (
    <div className="contact-information">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">Contact Details</h3>
              <h2 className="text-anime">Happy to Answer All Your Questions</h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>
        <div className="row">
          {contactInfoItems.map((item, index) => (
            <ContactInfoItem
              key={index}
              title={item.title}
              content={item.content}
              image={item.image}
              icon={item.icon}
              delay={item.delay}
              socialLinks={item.socialLinks}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
