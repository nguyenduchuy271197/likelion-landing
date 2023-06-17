import siteConfig from "@/config/siteConfig";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link
        href="/"
        className="relative flex items-center h-5 sm:h-6 aspect-[8/1]"
      >
        <Image
          src="/logo.png"
          alt={siteConfig.title}
          fill
          priority
          className="object-contain"
        />
      </Link>
    </div>
  );
}
