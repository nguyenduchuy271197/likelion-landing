"use client";

import CourseFeatureItem from "./CourseFeatureItem";
import { Button } from "../ui/Button";
import Link from "next/link";
import { forwardRef, useContext, useEffect, useRef, useState } from "react";
import { RegisterDialogContext } from "@/context/RegisterDialogProvider";
import CourseThumbnail from "./CourseThumbnail";
import { cn } from "@/lib/utils";

interface CourseInfoCardProps {
  youtubeId?: string;
  title: string;
  features: string[];
  thumbnail: string;
  slug: string;
}

const CourseInfo = forwardRef<HTMLDivElement, CourseInfoCardProps>(
  function CourseInfo({ title, features, slug, thumbnail, youtubeId }, ref) {
    const { setOpen: setDialogOpen } = useContext(RegisterDialogContext);

    return (
      <div className="w-[350px] bg-white shadow-xl" ref={ref}>
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
    );
  }
);

export default function CourseInfoCard({
  title,
  features,
  slug,
  thumbnail,
  youtubeId,
}: CourseInfoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInterval, setIsInterval] = useState<boolean>(false);

  useEffect(() => {
    const handleCardScroll = () => {
      const scrollY = window.scrollY + 72 + 60;
      setIsInterval(scrollY >= top && scrollY <= bottom - cardHeight);
    };

    const courseInfo = document.getElementById("course-info-scroll");
    const bottom = courseInfo?.getBoundingClientRect().bottom || 0;
    const top = courseInfo?.getBoundingClientRect().top || 0;
    const cardHeight = cardRef.current?.getBoundingClientRect().height || 0;
    window.addEventListener("scroll", handleCardScroll);

    return () => window.removeEventListener("scroll", handleCardScroll);
  }, []);

  return (
    <>
      <div
        className={cn(
          "absolute top-20 z-20 ml-[calc(min(100%,1200px)-350px-2rem)] hidden lg:block transition-all",
          isInterval ? "opacity-0 invisible" : "opacity-100 visible"
        )}
      >
        <CourseInfo
          ref={cardRef}
          title={title}
          features={features}
          slug={slug}
          thumbnail={thumbnail}
          youtubeId={youtubeId}
        />
      </div>
      <div
        className={cn(
          "fixed top-[calc(var(--navbar-height)+1rem)] z-20 ml-[calc(min(100%,1200px)-350px-32px)] hidden lg:block transition-all",
          isInterval ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <CourseInfo
          title={title}
          features={features}
          slug={slug}
          thumbnail={thumbnail}
          youtubeId={youtubeId}
        />
      </div>
    </>
  );
}
