"use client";

import { useContext } from "react";
import { Button } from "../ui/Button";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { RegisterDialogContext } from "@/context/RegisterDialogProvider";

export default function CourseHeadingActions({ slug }: { slug: string }) {
  const { setOpen: setDialogOpen } = useContext(RegisterDialogContext);

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="secondary"
        className="uppercase px-12 py-6 text-base font-bold text-black transition-all duration-500 ease-in-out transform rounded-full bg-gradient-to-r from-orange-200 to-orange-400 hover:from-orange-300 hover:to-orange-500 shadow-[0_2px_8px_rgba(255,255,255,_0.7)] hover:shadow-[0_3px_16px_rgba(255,255,255,_0.7)]"
        asChild
        onClick={() => setDialogOpen(true)}
      >
        <Link
          href={{
            pathname: "/register",
            query: { course: slug },
          }}
        >
          Đăng ký ngay
        </Link>
      </Button>

      <Button
        asChild
        className="uppercase px-12 py-6 text-base font-bold text-black transition-all duration-500 ease-in-out transform rounded-full bg-gradient-to-r from-gray-50 to-gray-200 hover:shadow-[0_2px_8px_rgba(255,255,255,_0.7)]"
      >
        <ScrollLink
          smooth
          spy
          offset={-150}
          duration={200}
          to="content"
          href="#content"
        >
          Xem lộ trình
        </ScrollLink>
      </Button>
    </div>
  );
}
