import SocialIcons from "@/components/SocialIcons";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface SocialIcon {
  href: string;
  icon: JSX.Element;
  label: string;
}

const socialIcons: SocialIcon[] = [
  {
    href: "https://www.facebook.com/likelionvietnam",
    icon: SocialIcons.facebook,
    label: "LIKELION Facebook",
  },
  {
    href: "https://www.instagram.com/likelionvn/",
    icon: SocialIcons.instagram,
    label: "LIKELION Instagram",
  },
  {
    href: "https://www.youtube.com/@likelionvietnam",
    icon: SocialIcons.youtube,
    label: "LIKELION Youtube",
  },
];

function SocialIcon({ href, icon, label }: SocialIcon) {
  return (
    <Link
      href={href}
      className="p-6 border rounded-2xl h-[250px] flex flex-col justify-between group hover:shadow-xl transition"
      target="_blank"
    >
      <div className="flex items-start justify-between">
        <div className="w-[70px] aspect-[1/1] grayscale group-hover:grayscale-0 transition">
          {icon}
        </div>
        <div className="mt-2 text-muted-foreground">
          <ArrowUpRight
            size={30}
            strokeWidth={1}
            className="transition duration-500 origin-bottom-left scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100"
          />
        </div>
      </div>

      <div className="text-xl scroll-m-20 text-muted-foreground">{label}</div>

      <span className="sr-only">{label}</span>
    </Link>
  );
}

export default function ContactSocial() {
  return (
    <div className="">
      <div className="container">
        <div className="py-28">
          <h5 className="mb-12 text-3xl font-medium scroll-m-20 lg:text-4xl">
            Nhấn theo dõi LIKELION qua các kênh
          </h5>
          {/* <h2 className="pb-2 mb-12 text-3xl font-medium transition-colors scroll-m-20 first:mt-0">
            Nhấn theo dõi LIKELION qua các kênh
          </h2> */}

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {socialIcons.map((icon) => (
              <SocialIcon {...icon} key={icon.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
