import OtherPagesHero from "@/components/otherPagesHero";
import InfoBar from "@/components/infobar";
import WhyChooseUs from "@/components/whyChooseUs";
import Image from "next/image";

const serviceItems = [
  {
    id: 1,
    title: "Solar Maintenance",
    text: "Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.",
    img: "/images/service-1.jpg",
    icon: "/images/icon-service-1.svg",
    delay: "0.25s",
  },
  {
    id: 2,
    title: "Energy Saving Devices",
    text: "Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.",
    img: "/images/service-2.jpg",
    icon: "/images/icon-service-2.svg",
    delay: "0.5s",
  },
  {
    id: 3,
    title: "Renewable Energy Solutions",
    text: "Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.",
    img: "/images/service-3.jpg",
    icon: "/images/icon-service-3.svg",
    delay: "0.75s",
  },
  {
    id: 4,
    title: "Energy Efficiency Consulting",
    text: "Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.",
    img: "/images/service-4.jpg",
    icon: "/images/icon-service-4.svg",
    delay: "1s",
  },
  {
    id: 5,
    title: "Smart Home Integration",
    text: "Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.",
    img: "/images/service-5.jpg",
    icon: "/images/icon-service-5.svg",
    delay: "1.25s",
  },
  {
    id: 6,
    title: "Commercial Solar Solutions",
    text: "Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.",
    img: "/images/service-6.jpg",
    icon: "/images/icon-service-6.svg",
    delay: "1.5s",
  },
];

export default function Services() {
  return (
    <>
      <OtherPagesHero pageName="Services" />
      <ServiceList />
      <InfoBar />
      <WhyChooseUs />
    </>
  );
}

function ServiceList() {
  return (
    <div className="page-services">
      <div className="container">
        <div className="row">
          {serviceItems.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              {/* Service Item Start */}
              <div
                className="service-item wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <a href="#" className="service-box-link"></a>

                <div className="service-image">
                  <figure>
                    <Image
                      src={item.img}
                      width={800}
                      height={450}
                      alt={item.title}
                    />
                  </figure>

                  <div className="service-icon">
                    <Image
                      src={item.icon}
                      width={50}
                      height={50}
                      alt={`${item.title} icon`}
                    />
                  </div>
                </div>

                <div className="service-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
              {/* Service Item End */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
