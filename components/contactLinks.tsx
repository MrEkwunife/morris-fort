import Link from "next/link";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function ContactLinks() {
  return (
    <aside className="flex items-center justify-center md:justify-between px-1 mb-3">
      <ContactEmailPhone />
      <ContactSocials />
    </aside>
  );
}

export function ContactEmailPhone() {
  const LinkStyles = "flex items-center gap-1 text-sm";

  return (
    <div className="flex gap-8 items-center">
      <Link href="mailto:info@domain.com" className={LinkStyles}>
        <Mail className="w-4" />
        <span>info@domain.com</span>
      </Link>

      <Link href="tel:+2348056930" className={LinkStyles}>
        <Phone className="w-4" />
        <span>+2348056930</span>
      </Link>
    </div>
  );
}

export function ContactSocials() {
  const LinkStyles = "border-1 px-1 py-0.5 rounded-sm";

  return (
    <div className="hidden md:flex gap-2 mt-4 items-center">
      <Link href="" className={LinkStyles}>
        <Facebook className="w-4" />
      </Link>
      <Link href="" className={LinkStyles}>
        <Twitter className="w-4" />
      </Link>
      <Link href="" className={LinkStyles}>
        <Instagram className="w-4" />
      </Link>
      <Link href="" className={LinkStyles}>
        <Linkedin className="w-4" />
      </Link>
    </div>
  );
}
