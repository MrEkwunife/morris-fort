import Link from "next/link";

interface PageLinkBtnProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function PageLinkBtn({
  children,
  href,
  className = "",
}: PageLinkBtnProps) {
  return (
    <Link
      href={href}
      className={`hover:border-b-2 border-current transition-all inline-block border py-3 px-4 rounded-full ${className}`}
    >
      {children}
    </Link>
  );
}
