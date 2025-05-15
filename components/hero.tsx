import ContactLinks from "./contactLinks";
import Nav from "./nav";
import PageLinkBtn from "./ui/pageLinkBtn";

export default function Hero() {
  return (
    <header>
      <div className="w-[92%] mx-auto pt-8 lg:w-[85%] lg:h-lvh">
        <div className="mb-16 lg:mb-32">
          <ContactLinks />
          <Nav />
        </div>

        <div className="px-1 flex flex-col gap-7 lg:gap-14 md:w-2/3 lg:pr-32">
          <h1 className="flex flex-col">
            <span className="text-sm lg:text-lg mb-3">
              WELCOME TO MORRIS FORTE
            </span>
            <span className="text-3xl lg:text-6xl">
              Powering the Future With Gold.
            </span>
          </h1>
          <p className="text-lg lg:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            ullam sit libero est nam, vero voluptates rerum voluptatibus hic
            eaque. Rerum officiis deleniti in amet perspiciatis optio qui
            voluptate minima.
          </p>
          <div className="flex gap-4 flex-wrap">
            <PageLinkBtn href="">Our Services</PageLinkBtn>
            <PageLinkBtn href="">Contact Now</PageLinkBtn>
          </div>
        </div>
      </div>
    </header>
  );
}
