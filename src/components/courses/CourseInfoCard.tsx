"use client";

import Image from "next/image";
import CourseFeatureItem from "./CourseFeatureItem";
import { Airplay, PlayIcon } from "lucide-react";
import { ICourse } from "@/types";
import { calcDiscountedPercent, formatVNDCurrency } from "@/helpers";
import { Button } from "../ui/Button";
import Link from "next/link";
import { useContext, useState } from "react";
import ModalVideo from "react-modal-video";
import PlayButton from "../PlayButton";
import { RegisterDialogContext } from "@/context/RegisterDialogProvider";
import { cn } from "@/lib/utils";

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
  const [open, setOpen] = useState(false);
  const { setOpen: setDialogOpen } = useContext(RegisterDialogContext);

  return (
    <div className="hidden lg:block">
      <div className="sticky top-[var(--navbar-height)] shadow-xl overflow-hidden">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className={cn("w-full h-full", youtubeId && "brightness-75")}
          />
          {youtubeId && (
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <PlayButton onClick={() => setOpen(true)} />
            </div>
          )}
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

        {youtubeId && (
          <ModalVideo
            channel="youtube"
            isOpen={open}
            videoId={youtubeId}
            onClose={() => setOpen(false)}
            youtube={{ autoplay: 1, mute: 1 }}
          />
        )}
      </div>
    </div>
  );
}
