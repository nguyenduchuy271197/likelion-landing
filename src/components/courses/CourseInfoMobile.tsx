"use client";

import Link from "next/link";
import { Button } from "../ui/Button";
import { useContext } from "react";
import { RegisterDialogContext } from "@/context/RegisterDialogProvider";
import { calcDiscountedPercent, formatVNDCurrency } from "@/helpers";
import CourseThumbnail from "./CourseThumbnail";
import CourseCountdown from "./CourseCountdown";
import { useWindowScroll } from "@mantine/hooks";
import { useViewportSize } from "@mantine/hooks";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

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
  const { height } = useViewportSize();
  const [scroll] = useWindowScroll();

  return (
    <>
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

        {[
          "khoa-hoc-lap-trinh-web-fullstack",
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

      <AnimatePresence>
        {scroll.y >= 1.2 * height && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
          >
            <div className="grid items-center max-w-xl grid-cols-2 gap-8 px-8 py-4 mx-auto text-white bg-primary rounded-tr-xl rounded-tl-xl">
              <div className="">
                <div className="text-3xl font-bold scroll-m-20 lg:text-4xl">
                  {formatVNDCurrency(discountedPrice)}
                </div>
                <div className="line-through text-muted-foreground">
                  {formatVNDCurrency(price)}
                </div>
              </div>
              <div>
                <Button
                  className="w-full py-6"
                  variant="secondary"
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
