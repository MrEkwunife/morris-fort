import HomeHero from "@/components/homeHero";
import About from "@/components/about";
import OurServices from "@/components/ourServices";
import OurProocess from "@/components/ourProcess";
import IntroVideo from "@/components/introVideo";
import WhyChooseUs from "@/components/whyChooseUs";

export default function Home() {
  return (
    <>
      <HomeHero />
      <About />
      <OurServices />
      <OurProocess />
      <IntroVideo />
      <WhyChooseUs />
    </>
  );
}
