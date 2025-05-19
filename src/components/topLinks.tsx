import ContactLinks from "./ui/contactLinks";
import SocialLinks from "./ui/socialLinks";

export default function TopLinks() {
  return (
    <div className="topbar wow fadeInUp">
      <div className="container">
        <div className="row">
          <ContactLinks />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
