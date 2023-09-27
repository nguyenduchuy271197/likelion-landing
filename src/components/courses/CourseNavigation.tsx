"use client";

import { Link } from "react-scroll";
import CourseContainer from "./CourseContainer";

const items = [
  {
    label: "Lợi ích khóa học",
    target: "benefits",
  },
  {
    label: "Lộ trình",
    target: "content",
  },
  {
    label: "Giảng viên",
    target: "lecturers",
  },
  {
    label: "Thông tin đăng ký",
    target: "payment",
  },
  {
    label: "Reviews",
    target: "feedbacks",
  },
];

export default function CourseNavigation() {
  return (
    <nav className="sticky top-[var(--navbar-height)] z-10 bg-primary text-muted hidden md:block">
      <div className="container">
        <div className="flex justify-center">
          <ul className="flex items-center">
            {items.map((item) => (
              <li key={item.label}>
                <Link
                  smooth
                  spy
                  offset={-150}
                  duration={200}
                  to={item.target}
                  className="px-4 py-4 font-medium transition duration-200 border-b-4 border-transparent cursor-pointer hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent"
                  href={`#${item.target}`}
                  activeClass="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
