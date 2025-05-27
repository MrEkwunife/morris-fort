import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/images/logo-2.png" alt="Logo" width={139} height={52} />
    </Link>
  );
}
