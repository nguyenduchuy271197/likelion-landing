"use client";

import CourseFeatureItem from "./CourseFeatureItem";
import { ICourse } from "@/types";
import { calcDiscountedPercent, formatVNDCurrency } from "@/helpers";
import { Button } from "../ui/Button";
import Link from "next/link";
import { useContext, useState } from "react";
import { RegisterDialogContext } from "@/context/RegisterDialogProvider";
import CourseThumbnail from "./CourseThumbnail";
import CourseCountdown from "./CourseCountdown";

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
  id,
  title,
  price,
  discountedPrice,
  features,
  slug,
  thumbnail,
  youtubeId,
}: CourseInfoCardProps) {
  const { setOpen: setDialogOpen } = useContext(RegisterDialogContext);

  return (
    <div className="hidden lg:block">
      <div className="sticky top-[var(--navbar-height)] shadow-xl overflow-hidden">
        <CourseThumbnail
          title={title}
          thumbnail={thumbnail}
          youtubeId={youtubeId}
        />
        <div className="p-6">
          <div>
            {/* Price */}
            <div>
              <div className="flex items-center gap-4 mb-1">
                <div className="flex items-center gap-1 text-3xl font-bold tracking-tight scroll-m-20 lg:text-4xl">
                  {formatVNDCurrency(discountedPrice)}
                </div>
                <div className="flex items-center gap-1 line-through text-muted-foreground">
                  {formatVNDCurrency(price)}
                </div>
              </div>
              <div className="text-muted-foreground">
                {calcDiscountedPercent(price, discountedPrice)}% off
              </div>
            </div>

            {[
              "bootcamp-lap-trinh-web-fullstack",
              "thanh-thao-lap-trinh-web-front-end",
            ].includes(slug) && <CourseCountdown />}

            {/* Registration */}
            <div className="my-4">
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
