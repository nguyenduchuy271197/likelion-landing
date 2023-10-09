"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel, EffectFade } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import data from "@/data/data.json";
const Achievements = dynamic(
  () => import("@/components/common/home/Achievements")
);

const bannerConfig = {
  autoplayDelay: 5000,
};

interface CourseBannerProps {
  title: string;
  subtitle: string;
  slug: string;
  background: {
    from: string;
    to: string;
  };
  thumbnail: string;
}

function CourseBanner({
  title,
  subtitle,
  slug,
  background,
  thumbnail,
}: CourseBannerProps) {
  return (
    <div
      className="pb-12 bg-black text-muted md:pt-20 md:pb-24"
      style={{
        background: `linear-gradient(to right,  ${background.from} 0%,${background.to} 100%)`,
      }}
    >
      <div className="container">
        <div className="h-[450px] sm:h-[400px] md:h-auto md:pb-20 lg:pb-10">
          <div className="flex flex-col-reverse items-center md:gap-8 md:flex-row [&>div]:flex-1">
            <div className="flex flex-col items-center max-w-xl space-y-8 text-left sm:text-center md:text-left md:items-start">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold capitalize sm:text-4xl lg:text-5xl">
                  {title}
                </h2>

                <p className="sm:text-lg text-muted/90">{subtitle}</p>
              </div>

              <Button
                variant="secondary"
                className="hidden md:flex uppercase px-12 py-6 text-base font-bold text-white transition-all duration-500 ease-in-out transform bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 shadow-[0_2px_8px_rgba(255,255,255,_0.7)] hover:shadow-[0_3px_16px_rgba(255,255,255,_0.7)]"
                asChild
              >
                <Link href={`/courses/${slug}`}>Xem khoá học</Link>
              </Button>
            </div>
            <div>
              <div className="relative w-[250px] lg:w-[350px] aspect-[1/1] md:bg-white/60 rounded-full mx-auto">
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  className="object-contain opacity-80 md:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Banner() {
  return (
    <section className="md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
        }}
        className="relative"
      >
        {/* Banner */}
        <Swiper
          effect="fade"
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
          modules={[Autoplay, Pagination, Mousewheel, EffectFade]}
        >
          {data.courses.map((course) => (
            <SwiperSlide key={course.slug}>
              <CourseBanner {...course} />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>

        {/* Achievements */}
        <div className="z-20 md:-translate-y-1/2 md:-translate-x-1/2 md:container md:absolute top-full left-1/2">
          <Achievements />
        </div>
      </motion.div>
    </section>
  );
}
