import siteConfig from "@/config/siteConfig";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href="/" className="block w-[160px]">
        <Image
          src="/logo.png"
          alt={siteConfig.title}
          height={26}
          width={130}
          className="object-contain w-full h-full"
          priority
        />
      </Link>
    </div>
  );
}
