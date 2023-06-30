import Link from "next/link";
import NavMenu from "./NavMenu";
import { Button } from "../../ui/Button";

import Logo from "../../Logo";
import NavMenuMobile from "./NavMenuMobile";
import NavRegisterButton from "./NavRegisterButton";

export interface CourseType {
  id: string;
  src: string;
  title: string;
  slug: string;
  excerpt: string;
  subtitle: string;
  href: string;
  statuses: string[];
  published: boolean;
}

export const courses: CourseType[] = [
  {
    id: "6482a08d232bf6c1513a1111",
    src: "/img/courses/fullstack.png",
    title: "Bootcamp lập trình web Fullstack",
    slug: "bootcamp-lap-trinh-web-fullstack",
    excerpt: "Trở thành lập trình viên Fullstack Bootcamp sau 5 tháng.",
    subtitle:
      "Trở thành lập trình viên Full-stack Web chỉ trong một khoá học 5 tháng. HTML, CSS, JavaScript, NodeJS, ReactJs, MongoDB.",
    href: "/courses/bootcamp-lap-trinh-web-fullstack",
    statuses: ["Part-time", "Offline"],
    published: true,
  },
  {
    id: "64883a8ab6a3fddba741f55e",
    src: "/img/courses/front-end.png",
    title: "Thành thạo lập trình web Frond-end",
    slug: "thanh-thao-lap-trinh-web-frond-end",
    excerpt:
      "Bắt đầu sự nghiệp lập trình web Front-end với khoá học offline 3 tháng.",
    subtitle:
      "Bắt đầu sự nghiệp lập trình web Front-end với khoá học offline 3 tháng.",
    href: "/courses/thanh-thao-lap-trinh-web-frond-end",
    statuses: ["Part-time", "Offline"],
    published: true,
  },
  {
    id: "64883aacb6a3fddba741f55f",
    src: "/img/courses/python.png",
    title: "Data Science cơ bản với Python",
    slug: "data-science-co-ban-voi-python",
    excerpt: "Khoá học online làm quen với khoa học dữ liệu.",
    subtitle:
      "Trở thành lập trình viên Full-stack Web chỉ trong một khoá học 5 tháng. HTML, CSS, JavaScript, NodeJS, ReactJs, MongoDB.",
    href: "/courses/data-science-co-ban-voi-python",
    statuses: ["Part-time", "Online"],
    published: true,
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
              <NavRegisterButton />
            </div>

            <NavMenuMobile courses={courses} />
          </div>
        </div>
      </div>
    </nav>
  );
}
