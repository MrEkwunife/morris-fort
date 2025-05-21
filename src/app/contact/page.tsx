import ContactInformation from "@/components/contactInformation";
import MapContactForm from "@/components/mapContactForm";
import OtherPagesHero from "@/components/otherPagesHero";

export default function Contact() {
  return (
    <>
      <OtherPagesHero pageName="Contact" />
      <ContactInformation />
      <MapContactForm />
    </>
  );
}
