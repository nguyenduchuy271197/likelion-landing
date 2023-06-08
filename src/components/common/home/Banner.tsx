"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel, Parallax } from "swiper";
import Image from "next/image";
import { motion } from "framer-motion";

const bannerConfig = {
  autoplayDelay: 4000,
};

export default function Banner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
      }}
    >
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
            return `<span class="${className} swiper-pagination-bullet--svg-animation"><svg viewBox="0 0 28 28"><circle class="svg__circle" style="--duration:${bannerConfig.autoplayDelay}ms" cx="14" cy="14" r="12" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="6" stroke-width="3"></circle></svg></span>`;
          },
        }}
        modules={[Autoplay, Pagination, Mousewheel]}
      >
        {[1, 1, 1, 1, 1].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-[4/3] md:aspect-[2/1] max-h-[800px] h-full mx-auto">
              <Image
                src="/img/banners/banner-1.png"
                alt="ABC"
                width={1000}
                height={500}
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </motion.section>
  );
}
