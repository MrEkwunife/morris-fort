import Image from "next/image";

interface memberObjectInterface {
  name: string;
  jobTitle: string;
  img: string;
}

const memberObject: memberObjectInterface[] = [
  {
    name: "John Doe",
    jobTitle: "Solar Engineer",
    img: "/images/team-1.jpg",
  },
  {
    name: "John Doe",
    jobTitle: "Solar Engineer",
    img: "/images/team-2.jpg",
  },
  {
    name: "John Doe",
    jobTitle: "Solar Engineer",
    img: "/images/team-3.jpg",
  },
  {
    name: "John Doe",
    jobTitle: "Solar Engineer",
    img: "/images/team-4.jpg",
  },
];

export default function TeamSection() {
  return (
    <div className="our-team">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <!-- Section Title Start --> */}
            <div className="section-title">
              <h3 className="wow fadeInUp">Our Team</h3>
              <h2 className="text-anime">Our Best Experts</h2>
            </div>
            {/* <!-- Section Title End --> */}
          </div>
        </div>

        <div className="row">
          {memberObject.map((member, i) => (
            <Member
              key={i}
              name={member.name}
              jobTitle={member.jobTitle}
              img={member.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Member({ name, jobTitle, img }: memberObjectInterface) {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="team-item wow fadeInUp" data-wow-delay="1.0s">
        <div className="team-image">
          <figure className="image-anime">
            <Image width={800} height={450} src={img} alt="" />
          </figure>
        </div>

        <div className="team-content">
          <h2>{name}</h2>
          <p>{jobTitle}</p>
          <a href="#" className="btn-team-link">
            <Image
              width={18}
              height={18}
              src="images/icon-link-dark.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
