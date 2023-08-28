"use client";

import CourseFeatureItem from "./CourseFeatureItem";
import { ICourse } from "@/types";
import { Button } from "../ui/Button";
import Link from "next/link";
import { useContext, useEffect, useRef } from "react";
import { RegisterDialogContext } from "@/context/RegisterDialogProvider";
import CourseThumbnail from "./CourseThumbnail";

type CourseInfoCardProps = Pick<
  ICourse,
  | "id"
  | "title"
  | "price"
  | "discountedPrice"
  | "features"
  | "slug"
  | "thumbnail"
  | "youtubeId"
>;

export default function CourseInfoCard({
  title,
  features,
  slug,
  thumbnail,
  youtubeId,
}: CourseInfoCardProps) {
  const { setOpen: setDialogOpen } = useContext(RegisterDialogContext);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const courseInfo = document.getElementById("course-info");
    const bottom = courseInfo?.getBoundingClientRect().bottom || 0;
    window.addEventListener("scroll", () => {
      if (cardRef.current) {
        if (
          window.scrollY +
            (cardRef.current?.offsetTop || 0) +
            cardRef.current.getBoundingClientRect().height >=
          bottom
        ) {
          cardRef.current.style.opacity = "0";
        } else {
          cardRef.current.style.opacity = "1";
        }
      }
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className="fixed top-[calc(var(--navbar-height)+5rem)] z-20 ml-[calc(min(100%,1200px)-350px-32px)] hidden lg:block transition-all"
    >
      <div className="w-[350px] bg-white border-4 border-white shadow-xl">
        <CourseThumbnail
          title={title}
          thumbnail={thumbnail}
          youtubeId={youtubeId}
        />
        <div className="p-6 space-y-4">
          {/* Registration */}
          <div>
            <Button
              className="w-full"
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
          </div>

          {/* Features */}
          <div className="my-2">
            <h4 className="mb-4 font-medium tracking-tight scroll-m-20">
              Khoá học bao gồm:
            </h4>
            <ul className="flex flex-col gap-4 mt-4 text-sm">
              {features?.map((feature) => (
                <CourseFeatureItem key={feature} name={feature} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
