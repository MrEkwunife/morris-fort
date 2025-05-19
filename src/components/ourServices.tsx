import Image from "next/image";
import { title } from "process";

interface servicesInterface {
  img: string;
  icon: string;
  title: string;
  text: string;
}

const serviceItems: servicesInterface[] = [
  {
    img: "/images/service-1.jpg",
    icon: "/images/icon-service-1.svg",
    title: "Solar Maintenance",
    text: "Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.",
  },
  {
    img: "/images/service-2.jpg",
    icon: "/images/icon-service-2.svg",
    title: "Energy Saving Devices",
    text: "Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.",
  },
  {
    img: "/images/service-3.jpg",
    icon: "/images/icon-service-3.svg",
    title: "Solar Solutions",
    text: "Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.",
  },
  {
    img: "/images/service-4.jpg",
    icon: "/images/icon-service-4.svg",
    title: "Energy Saving Devices",
    text: "Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.",
  },
];

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
                  {serviceItems.map((item, i) => (
                    <Service
                      key={i}
                      img={item.img}
                      icon={item.icon}
                      title={item.title}
                      text={item.text}
                    />
                  ))}
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

export function Service({ img, icon, title, text }: servicesInterface) {
  return (
    <div className="swiper-slide">
      <div className="service-item">
        <div className="service-image">
          <figure>
            <Image src={img} alt="service img" width={800} height={962} />
          </figure>

          <div className="service-icon">
            <Image src={icon} alt="icon" width={50} height={50} />
          </div>
        </div>

        <div className="service-content">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
