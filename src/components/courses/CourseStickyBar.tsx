"use client";

import { ArrowDownRight } from "lucide-react";
import { Button } from "../ui/Button";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { RegisterDialogContext } from "@/context/RegisterDialogProvider";
import { cn } from "@/lib/utils";

interface CourseStickyBarProps {
  title: string;
  highlights: string[];
  slug: string;
}

export default function CourseStickyBar({
  title,
  highlights,
  slug,
}: CourseStickyBarProps) {
  const { setOpen: setDialogOpen } = useContext(RegisterDialogContext);
  const sbarRef = useRef<HTMLDivElement>(null);
  const [isInterval, setIsInterval] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 72;
      setIsInterval(scrollY >= top && scrollY <= bottom - cardHeight);
    };

    const courseInfo = document.getElementById("course-info-area");
    const bottom = courseInfo?.getBoundingClientRect().bottom || 0;
    const top = courseInfo?.getBoundingClientRect().top || 0;
    const cardHeight = sbarRef.current?.getBoundingClientRect().height || 0;
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed z-20 hidden w-full max-w-5xl px-8 -translate-x-1/2 bottom-8 left-1/2 md:block transition",
        isInterval ? "visible opacity-100" : "invisible opacity-0"
      )}
      ref={sbarRef}
    >
      <div className="bg-white border shadow-md rounded-xl">
        <div className="flex items-center justify-between gap-8 px-8 py-4">
          <h2 className="max-w-xs text-2xl font-bold text-orange-500 sm:text-3xl">
            {title}
          </h2>
          <div className="flex items-center gap-8">
            <div className="hidden lg:block">
              {highlights && (
                <ul className="flex flex-col gap-2 text-sm font-medium">
                  {highlights.map((highlight) => (
                    <li className="flex items-center gap-2" key={highlight}>
                      <ArrowDownRight
                        className="w-4 h-4 shrink-0"
                        strokeWidth={3}
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
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
                  id={`register-sticky-${slug}`}
                >
                  Đăng ký ngay
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
