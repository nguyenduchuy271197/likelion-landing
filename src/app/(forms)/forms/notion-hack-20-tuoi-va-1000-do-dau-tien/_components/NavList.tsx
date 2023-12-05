"use client";

import { Link } from "react-scroll";
import { ROUTES } from "./constants";

export default function NavList() {
  return (
    <ul className="flex items-center gap-8">
      {ROUTES.map((item) => (
        <li key={item.label}>
          <Link
            smooth
            spy
            offset={-80}
            duration={200}
            to={item.target}
            className="font-medium transition duration-200 border-b-4 border-transparent cursor-pointer hover:text-orange-500"
            href={`#${item.target}`}
            activeClass="text-orange-500 font-bold"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
