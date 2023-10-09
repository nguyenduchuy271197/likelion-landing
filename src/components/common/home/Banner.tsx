"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel, EffectFade } from "swiper/modules";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import data from "@/data/data.json";
const Achievements = dynamic(
  () => import("@/components/common/home/Achievements")
);

const container = {
  hidden: { y: -20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 0, opacity: 1 },
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
  isActive: boolean;
}

function CourseBanner({
  title,
  subtitle,
  slug,
  background,
  thumbnail,
  isActive,
}: CourseBannerProps) {
  return (
    <Link
      href={`/courses/${slug}`}
      className="pb-12 bg-black text-muted md:pt-20 md:pb-24"
      style={{
        background: `linear-gradient(to right,  ${background.from} 0%,${background.to} 100%)`,
      }}
    >
      <div className="container">
        <div className="min-h-[450px] sm:min-h-[400px] md:h-auto md:pb-20 lg:pb-10">
          <div className="flex flex-col-reverse items-center md:gap-8 md:flex-row [&>div]:flex-1">
            <div className="flex flex-col items-center max-w-xl space-y-8 text-left sm:text-center md:text-left md:items-start">
              {isActive && (
                <>
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="space-y-4"
                  >
                    <motion.h2
                      variants={item}
                      className="text-4xl font-bold capitalize sm:text-4xl lg:text-5xl"
                    >
                      {title}
                    </motion.h2>

                    <motion.p
                      variants={item}
                      className="sm:text-lg text-muted/90"
                    >
                      {subtitle}
                    </motion.p>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: {
                          delay: 0.5,
                        },
                      },
                    }}
                    initial="hidden"
                    animate="show"
                  >
                    <Button
                      variant="secondary"
                      className="hidden md:flex uppercase px-12 py-6 text-base font-bold text-white transition-all duration-500 ease-in-out transform bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 shadow-[0_2px_8px_rgba(255,255,255,_0.7)] hover:shadow-[0_3px_16px_rgba(255,255,255,_0.7)]"
                      asChild
                    >
                      <Link href={`/courses/${slug}`}>Xem khoá học</Link>
                    </Button>
                  </motion.div>
                </>
              )}
            </div>
            <div>
              <div className="mx-auto rounded-full md:bg-white/60 w-[250px] lg:w-[350px] aspect-[1/1]">
                {isActive && (
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -20,
                      },
                      show: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: 0.5,
                          duration: 0.5,
                        },
                      },
                    }}
                    initial="hidden"
                    animate="show"
                    className="relative w-full h-full"
                  >
                    <Image
                      src={thumbnail}
                      alt={title}
                      fill
                      className="object-contain opacity-80 md:opacity-100"
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Banner() {
  return (
    <section className="md:pb-20">
      <motion.div className="relative">
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
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return `<span class="${className} swiper-pagination-bullet--svg-animation"><svg viewBox="0 0 28 28"><circle class="svg__circle" style="--duration:${5000}ms" cx="14" cy="14" r="12" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="6" stroke-width="4"></circle></svg></span>`;
            },
          }}
          modules={[Autoplay, Pagination, Mousewheel, EffectFade]}
        >
          {data.courses.map((course) => (
            <SwiperSlide key={course.slug}>
              {({ isActive }) => (
                <AnimatePresence>
                  <CourseBanner {...course} isActive={isActive} />
                </AnimatePresence>
              )}
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
