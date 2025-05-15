import ServicesCarousel from "./servicesCarousel";

export default function Service() {
  return (
    <section>
      <div className="w-[92%] mx-auto lg:w-[85%] ">
        <h1 className="flex flex-col">
          <span className="text-sm lg:text-lg mb-3">Services</span>
          <span className="text-3xl lg:text-6xl">
            Lorem The Service we render
          </span>
        </h1>
      </div>
      <ServicesCarousel />
    </section>
  );
}
