"use client";

import Image from "next/image";
import CourseFeatureItem from "./CourseFeatureItem";
import { Airplay, PlayIcon } from "lucide-react";
import { ICourse } from "@/types";
import { calcDiscountedPercent, formatVNDCurrency } from "@/helpers";
import { Button } from "../ui/Button";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

type CourseInfoCardProps = Pick<
  ICourse,
  "id" | "price" | "discountedPrice" | "features" | "slug"
>;

export default function CourseInfoCard({
  id,
  price,
  discountedPrice,
  features,
  slug,
}: CourseInfoCardProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="hidden lg:block">
      <div className="sticky top-[var(--navbar-height)] shadow-xl overflow-hidden">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src="/img/thumbnails/fullstack.webp"
            alt=""
            fill
            className="w-full h-full brightness-75"
          />
          <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <Button
              className="w-12 h-12 rounded-full"
              variant="secondary"
              onClick={() => setOpen(true)}
            >
              <PlayIcon fill="#000" />
            </Button>
          </div>
        </div>
        <div className="p-6">
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

            <div className="my-4">
              {/* <RegisterButton courseId={id} /> */}
              <Button className="w-full" asChild>
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
                <CourseFeatureItem
                  key={feature}
                  icon={Airplay}
                  name={feature}
                />
              ))}
            </ul>
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="duAOTul9UNs"
          onClose={() => setOpen(false)}
          youtube={{ autoplay: 1, mute: 1 }}
        />
      </div>
    </div>
  );
}
