import Image from "next/image";

interface reasonsInterface {
  img: string;
  icon: string;
  title: string;
  text: string;
}

const reasonsItems: reasonsInterface[] = [
  {
    img: "/images/whyus-1.jpg",
    icon: "/images/icon-whyus-1.svg",
    title: "Efficiency & Power",
    text: "Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.",
  },
  {
    img: "/images/whyus-2.jpg",
    icon: "/images/icon-whyus-2.svg",
    title: "Trust & Warranty",
    text: "Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.",
  },
  {
    img: "/images/whyus-3.jpg",
    icon: "/images/icon-whyus-3.svg",
    title: "High Quality Work",
    text: "Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.",
  },
  {
    img: "/images/whyus-4.jpg",
    icon: "/images/icon-whyus-4.svg",
    title: "24*7 Support",
    text: "Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.",
  },
];

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
          {reasonsItems.map((reason, i) => (
            <Reason
              key={i}
              img={reason.img}
              icon={reason.icon}
              title={reason.title}
              text={reason.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Reason({ img, icon, title, text }: reasonsInterface) {
  return (
    <div className="col-lg-3 col-md-6">
      {/* <!-- Why Choose Item Start --> */}
      <div className="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
        <div className="why-choose-image">
          <Image src={img} alt="why choose us img" width={600} height={554} />
        </div>

        <div className="why-choose-content">
          <div className="why-choose-icon">
            <Image src={icon} alt="why choose us" width={63} height={61} />
          </div>

          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
      {/* <!-- Why Choose Item End --> */}
    </div>
  );
}
