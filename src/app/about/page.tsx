import OtherPagesHero from "@/components/otherPagesHero";
import AboutSection from "@/components/about";
import WhyChooseUs from "@/components/whyChooseUs";
import OurProocess from "@/components/ourProcess";
import TeamSection from "@/components/team";

export default function About() {
  return (
    <>
      <OtherPagesHero pageName="About" />
      <AboutSection />
      <WhyChooseUs />
      <TeamSection />
      <OurProocess />
    </>
  );
}
