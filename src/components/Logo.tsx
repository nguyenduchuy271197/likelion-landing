import siteConfig from "@/config/siteConfig";
import Image from "next/image";
import Link from "next/link";

const logo = {
  black: "/logo-black.svg",
  white: "/logo.svg",
};

export default function Logo({
  variant = "black",
}: {
  variant?: keyof typeof logo;
}) {
  return (
    <Link
      href="/"
      className="relative flex items-center h-5 sm:h-6 aspect-[8/1]"
    >
      <Image
        src={logo[variant]}
        alt={siteConfig.title}
        fill
        priority
        className="object-contain"
      />
    </Link>
  );
}
