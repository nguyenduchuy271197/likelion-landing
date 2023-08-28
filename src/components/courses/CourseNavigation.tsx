"use client";

import { Link } from "react-scroll";
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
    target: "schedules",
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
        <div className="flex justify-center lg:justify-start">
          <ul className="flex items-center">
            {items.map((item) => (
              <li key={item.label}>
                <Link
                  smooth
                  spy
                  offset={-150}
                  duration={200}
                  to={item.target}
                  className="px-6 py-4 font-medium transition duration-200 border-b-4 border-transparent hover:text-[#ff7700] hover:border-[#ff7700] cursor-pointer"
                  href={`#${item.target}`}
                  activeStyle={{
                    borderColor: "#ff7700",
                    color: "#ff7700",
                  }}
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
