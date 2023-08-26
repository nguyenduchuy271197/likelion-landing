"use client";

import Link from "next/link";
import { Button } from "../ui/Button";
import { useContext } from "react";
import { RegisterDialogContext } from "@/context/RegisterDialogProvider";
import CourseThumbnail from "./CourseThumbnail";

interface CourseInfoMobileProps {
  discountedPrice: number;
  price: number;
  slug: string;
  title: string;
  thumbnail: string;
  youtubeId?: string;
}

export default function CourseInfoMobile({
  slug,
  title,
  thumbnail,
  youtubeId,
}: CourseInfoMobileProps) {
  const { setOpen: setDialogOpen } = useContext(RegisterDialogContext);

  return (
    <div className="max-w-xl mx-auto lg:hidden">
      {/* Thumbnail */}
      <CourseThumbnail
        title={title}
        thumbnail={thumbnail}
        youtubeId={youtubeId}
      />

      {/* Registration */}
      <div className="my-4">
        <Button className="w-full" asChild onClick={() => setDialogOpen(true)}>
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
    </div>
  );
}
