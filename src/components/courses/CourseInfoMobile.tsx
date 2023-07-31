"use client";

import Link from "next/link";
import { Button } from "../ui/Button";
import { useContext } from "react";
import { RegisterDialogContext } from "@/context/RegisterDialogProvider";
import { calcDiscountedPercent, formatVNDCurrency } from "@/helpers";
import CourseThumbnail from "./CourseThumbnail";
import CourseCountdown from "./CourseCountdown";

interface CourseInfoMobileProps {
  discountedPrice: number;
  price: number;
  slug: string;
  title: string;
  thumbnail: string;
  youtubeId?: string;
}

export default function CourseInfoMobile({
  discountedPrice,
  price,
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

      {/* Price */}
      <div className="mt-6">
        <div className="flex items-center gap-4 mb-1">
          <div className="text-3xl font-bold scroll-m-20 lg:text-4xl">
            {formatVNDCurrency(discountedPrice)}
          </div>
          <div className="line-through text-muted-foreground">
            {formatVNDCurrency(price)}
          </div>
        </div>
        <div className="text-muted-foreground">
          {calcDiscountedPercent(price, discountedPrice)}% off
        </div>
      </div>

      <CourseCountdown />

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
