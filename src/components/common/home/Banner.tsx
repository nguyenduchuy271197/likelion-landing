"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel } from "swiper";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
const Achievement = dynamic(
  () => import("@/components/common/home/Achievement")
);

const banners = [
  {
    href: "/courses/bootcamp-lap-trinh-web-fullstack",
    src: {
      sm: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688543394/home/banners/fullstack-mb.png",
      lg: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688543234/home/banners/fullstack.png",
    },
    title: "Bootcamp lập trình web Fullstack",
    description: "Khoá học giúp bạn trở thành lập trình viên chỉ sau 5 tháng",
  },
  {
    href: "/about",
    src: {
      sm: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688543393/home/banners/hyl-mb.png",
      lg: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688543234/home/banners/hyl.png",
    },
    title: "Hack Your Life",
    description: "Từ con số 0 đến thành thạo các kĩ năng",
  },
];

const bannerConfig = {
  autoplayDelay: 5000,
};

export default function Banner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
      }}
      className="relative mb-20"
    >
      {/* Banner */}
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        speed={750}
        loop={true}
        mousewheel={{
          forceToAxis: true,
        }}
        autoplay={{
          delay: bannerConfig.autoplayDelay,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          dynamicBullets: true,
          renderBullet: function (index, className) {
            return `<span class="${className} swiper-pagination-bullet--svg-animation"><svg viewBox="0 0 28 28"><circle class="svg__circle" style="--duration:${bannerConfig.autoplayDelay}ms" cx="14" cy="14" r="12" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="6" stroke-width="4"></circle></svg></span>`;
          },
        }}
        modules={[Autoplay, Pagination, Mousewheel]}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.title}>
            <Link href={banner.href} className="relative">
              <picture>
                <source srcSet={banner.src.lg} media="(min-width: 768px)" />
                <Image
                  src={banner.src.sm}
                  alt={banner.title}
                  className="absolute top-0 left-0 object-center w-full h-full -z-10"
                  fill
                  priority
                />
              </picture>
              <div className="container">
                <div className="h-[65vh] md:h-[75vh] flex items-end md:items-center py-12">
                  <div className="max-w-lg text-left text-white lg:max-w-xl">
                    <h2 className="flex items-center gap-2 mb-4 text-4xl font-bold capitalize md:text-5xl lg:text-6xl">
                      {banner.title}
                    </h2>
                    <p className="lg:text-xl">{banner.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>

      {/* Achievements */}
      <div className="z-20 md:-translate-y-1/2 md:-translate-x-1/2 md:container md:absolute top-full left-1/2">
        <Achievement />
      </div>
    </motion.section>
  );
}
