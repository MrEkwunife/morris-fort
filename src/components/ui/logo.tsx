import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <img src="/images/logo.svg" alt="Logo" />
    </Link>
  );
}
