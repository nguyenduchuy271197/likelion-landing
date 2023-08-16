"use client";

import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Button } from "@/components/ui/Button";
import { useRef } from "react";
import { NavigationOptions } from "swiper/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMediaQuery } from "@mantine/hooks";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface EventProps {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
}

const events: EventProps[] = [
  {
    title: "LIKELION hợp tác với ShinhanDS - Khai giảng lớp lập trình",
    slug: "LIKELION-hop-tac-voi-ShinhanDS-khai-giang-khoa-hoc-lap-trinh",
    description:
      "LIKELION và ShinhanDS hợp tác tổ chức các khoá đào tạo lập trình cho các bạn sinh viên, xây dựng nguồn nhân sự IT chất lượng.",
    thumbnail:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1692169553/blogs/LIKELION-hop-tac-voi-ShinhanDS-khai-giang-khoa-hoc-lap-trinh/Shinhan_DS_Mobile_yb0vwb.png",
  },
  {
    title: "LIKELION x Naver - Tổ chức khoá học lập trình",
    slug: "LIKELION-cung-Naver-to-chuc-khoa-hoc-lap-trinh",
    description:
      "LIKELION hợp tác cùng Naver, tổ chức các khoá đào tạo lập trình Front-End và Back-End cho sinh viên khoa CNTT, Trường Đại học CNTT TP.HCM",
    thumbnail:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1692170555/blogs/LIKELION-cung-Naver-to-chuc-khoa-hoc-lap-trinh/Naver_Mobile_i6luth.png",
  },
  {
    title: "LIKELION x KICC - Ký kết chiến lược cung ứng nhân sự IT",
    slug: "LIKELION-va-KICC-ky-ket-chien-luoc-cung-ung-nhan-su-IT",
    description:
      "LIKELION cùng KICC hợp tác chiến lược trong nỗ lực đào tạo và cung ứng nhân sự IT chất lượng cao cho các Doanh nghiệp IT tại TPHCM",
    thumbnail:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1692170837/blogs/LIKELION-va-KICC-ky-ket-chien-luoc-cung-ung-nhan-su-IT/KICC_Mobile_tb6i8f.png",
  },
];

function EventCard({ title, description, thumbnail, slug }: EventProps) {
  return (
    <div className="grid h-full rounded-lg shadow-lg lg:grid-cols-[2fr_1fr] overflow-hidden">
      <div className="relative aspect-[2/1]">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 space-y-3 sm:p-8">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground line-clamp-5">{description}</p>
        <Button asChild>
          <Link href={`/blogs/${slug}`}>Xem thêm</Link>
        </Button>
      </div>
    </div>
  );
}

export default function Events() {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const lgMatches = useMediaQuery("(min-width: 1024px)");
  return (
    <section>
      <div className="container px-4">
        <div className="py-10 md:py-20">
          <SectionHeading title="Sự kiện" className="mb-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
            viewport={{ once: true }}
          >
            <Swiper
              slidesPerView={1.05}
              spaceBetween={32}
              modules={[Navigation]}
              style={{
                // height: lgMatches ? 550 : 360,
                paddingInline: 16,
                paddingBlock: lgMatches ? 80 : 16,
                overflowY: "visible",
              }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                const navigation = swiper.params
                  .navigation as NavigationOptions;
                navigation.prevEl = navigationPrevRef.current;
                navigation.nextEl = navigationNextRef.current;
              }}
            >
              {events.map((event) => (
                <SwiperSlide key={event.title}>
                  <EventCard {...event} />
                </SwiperSlide>
              ))}
              <div
                className={cn(
                  "absolute top-0 right-0 items-center gap-4",
                  lgMatches ? "flex" : "hidden"
                )}
              >
                <Button
                  ref={navigationPrevRef}
                  variant="outline"
                  className="h-16 rounded-full aspect-[1/1] border-2"
                >
                  <ChevronLeft />
                </Button>
                <Button
                  ref={navigationNextRef}
                  variant="outline"
                  className="h-16 rounded-full aspect-[1/1] border-2"
                >
                  <ChevronRight />
                </Button>
              </div>
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
