"use client";

import { useContext } from "react";
import { Button } from "../ui/Button";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { RegisterDialogContext } from "@/context/RegisterDialogProvider";

export default function CourseHeadingActions({ slug }: { slug: string }) {
  const { setOpen: setDialogOpen } = useContext(RegisterDialogContext);

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <Button
        variant="secondary"
        className="uppercase px-12 py-6 text-base font-bold text-white transition-all duration-500 ease-in-out transform rounded-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 shadow-[0_2px_8px_rgba(255,255,255,_0.7)] hover:shadow-[0_3px_16px_rgba(255,255,255,_0.7)]"
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
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeI0D0GgctKe_5dF0Abq2LJkMb18QlvUBAjNqkDmPm18LjZMg/viewform"
          target="_blank"
        >
          Học thử miễn phí
        </Link>
      </Button>
    </div>
  );
}
