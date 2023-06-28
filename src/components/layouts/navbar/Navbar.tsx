import Link from "next/link";
import NavMenu from "./NavMenu";
import { Button } from "../../ui/Button";

import Logo from "../../Logo";
import NavMenuMobile from "./NavMenuMobile";

export interface CourseType {
  src: string;
  title: string;
  slug: string;
  subtitle: string;
  href: string;
  statuses: string[];
}

export const courses: CourseType[] = [
  {
    src: "/img/courses/fullstack.png",
    title: "Fullstack Web Development Bootcamp",
    slug: "fullstack-web-development-bootcamp",
    subtitle: "Re-usable components built using Radix UI and Tailwind CSS.",
    href: "/courses/fullstack-web-development-bootcamp",
    statuses: ["Part-time", "Offline"],
  },
  {
    src: "/img/courses/fullstack.png",
    title: "Khoá học Java",
    slug: "khoa-hoc-java",
    subtitle: "Re-usable components built using Radix UI and Tailwind CSS.",
    href: "/courses/fullstack-web-development-bootcamp",
    statuses: ["Part-time", "Offline"],
  },
  {
    src: "/img/courses/fullstack.png",
    title: "Data Science cơ bản với Python",
    slug: "data-science-co-ban-voi-python",
    subtitle: "Re-usable components built using Radix UI and Tailwind CSS.",
    href: "/courses/data-science-co-ban-voi-python",
    statuses: ["Part-time", "Offline"],
  },
];

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 min-h-navbar backdrop-blur-sm h-fit shadow-navbar bg-background/90 ">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Logo />

          {/* Nav */}
          <NavMenu courses={courses} />

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <Button className="w-full" asChild>
                <Link href="/register">Đăng ký ngay</Link>
              </Button>
            </div>

            <NavMenuMobile courses={courses} />
          </div>
        </div>
      </div>
    </nav>
  );
}
