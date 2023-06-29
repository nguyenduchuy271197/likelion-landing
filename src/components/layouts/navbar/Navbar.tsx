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
  published: boolean;
}

export const courses: CourseType[] = [
  {
    src: "/img/courses/fullstack.png",
    title: "Bootcamp lập trình web Fullstack",
    slug: "bootcamp-lap-trinh-web-fullstack",
    subtitle:
      "Trở thành lập trình viên Full-stack Web chỉ trong một khoá học 5 tháng. HTML, CSS, JavaScript, NodeJS, ReactJs, MongoDB.",
    href: "/courses/bootcamp-lap-trinh-web-fullstack",
    statuses: ["Part-time", "Offline"],
    published: true,
  },
  {
    src: "/img/courses/python.png",
    title: "Data Science cơ bản với Python",
    slug: "data-science-co-ban-voi-python",
    subtitle:
      "Trở thành lập trình viên Full-stack Web chỉ trong một khoá học 5 tháng. HTML, CSS, JavaScript, NodeJS, ReactJs, MongoDB.",
    href: "/courses/data-science-co-ban-voi-python",
    statuses: ["Part-time", "Online"],
    published: true,
  },
  {
    src: "/img/courses/front-end.png",
    title: "Front-end Night Class",
    slug: "front-end-night-class",
    subtitle:
      "Trở thành lập trình viên Full-stack Web chỉ trong một khoá học 5 tháng. HTML, CSS, JavaScript, NodeJS, ReactJs, MongoDB.",
    href: "/courses/front-end-night-class",
    statuses: ["Part-time", "Offline"],
    published: false,
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
