import Image from "next/image";

interface process {
  img: string;
  step: string;
  title: string;
  text: string;
}

const processItems: process[] = [
  {
    img: "/images/icon-step-1.svg",
    step: "01",
    title: "Project Planing",
    text: "Lorem Ipsum is simply dummy text of the printing andtypesetting industry",
  },
  {
    img: "/images/icon-step-2.svg",
    step: "02",
    title: "Research & Analysis",
    text: "Lorem Ipsum is simply dummy text of the printing andtypesetting industry",
  },
  {
    img: "/images/icon-step-3.svg",
    step: "03",
    title: "Solar Installation",
    text: "Lorem Ipsum is simply dummy text of the printing andtypesetting industry",
  },
];

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
          {processItems.map((processItem) => (
            <Process
              key={processItem.step}
              img={processItem.img}
              step={processItem.step}
              title={processItem.title}
              text={processItem.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Process({ img, step, title, text }: process) {
  return (
    <div className="col-md-4">
      <div className="step-item wow fadeInUp" data-wow-delay="0.75s">
        <div className="step-header">
          <div className="step-icon">
            <figure>
              <Image src={img} alt="process img 3" width={55} height={55} />
            </figure>
            <span className="step-no">{step}</span>
          </div>
        </div>

        <div className="step-content">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
      {/* <!-- Step Item End --> */}
    </div>
  );
}
