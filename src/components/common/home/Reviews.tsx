"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperCore } from "swiper";
import { EffectCoverflow, Pagination, Thumbs, Autoplay } from "swiper";
import Image from "next/image";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Reviews() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  return (
    <section className="py-20">
      <SectionHeading
        title="Phản hồi từ học viên"
        subtitle="Những trải nghiệm đáng giá từ những người đã tham gia khoá học lập trình và thành công trong việc học"
      />
      <div className="flex items-center justify-between h-[70vh] min-h-[400px]">
        <motion.div
          className="hidden w-2/5 md:block gallery-thumbs"
          initial={{
            opacity: 0,
            x: -40,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
        >
          <Swiper
            onSwiper={setThumbsSwiper}
            slideToClickedSlide={true}
            loop={true}
            speed={400}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 50,
              modifier: 6,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectCoverflow, Pagination, Thumbs]}
          >
            <SwiperSlide
              style={{
                width: 200,
                height: 330,
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <Image
                src="/img/teachers/huy.jpg"
                alt=""
                width={300}
                height={400}
                className="w-full"
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: 200,
                height: 330,
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <Image
                src="/img/teachers/huy.jpg"
                alt=""
                width={300}
                height={400}
                className="w-full"
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: 200,
                height: 330,
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <Image
                src="/img/teachers/huy.jpg"
                alt=""
                width={300}
                height={400}
                className="w-full"
              />
            </SwiperSlide>
            <div className="swiper-pagination"></div>
          </Swiper>
        </motion.div>
        <motion.div
          className="w-full max-w-3xl bg-[#e89a3d] md:w-3/5 h-full text-white py-8 lg:rounded-tr-[20rem] mx-auto"
          initial={{
            opacity: 0,
            x: 40,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
        >
          <Swiper
            direction={"vertical"}
            loop={true}
            speed={400}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              dynamicBullets: true,
              renderBullet: function (index, className) {
                return `<span class="${className}swiper-pagination-bullet--svg-animation"><svg viewBox="0 0 28 28"><circle class="svg__circle" style="--duration:${3000}ms" cx="14" cy="14" r="12" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="6" stroke-width="3"></circle></svg></span>`;
              },
            }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Autoplay, Pagination, Thumbs]}
          >
            <SwiperSlide>
              <div className="flex flex-col justify-center w-full h-full px-12 text-left lg:px-24">
                <div className="w-[45px] mb-4">
                  <Image
                    className="object-contain w-full h-full"
                    src="/img/reviews/quote.png"
                    alt="Quote"
                    width={45}
                    height={45}
                  />
                </div>
                <div>
                  <p className="mt-4 mb-2 text-lg italic font-light leading-9 md:text-xl lg:text-2xl">
                    “Khóa học rất hay và bổ ích, giảng viên rất nhiệt tình và
                    thân thiện. Em đã học được rất nhiều kiến thức mới và cải
                    thiện được kỹ năng lập trình của mình. Em rất hài lòng với
                    khóa học này..“
                  </p>
                  <div className="text-lg font-medium leading-9">
                    - Nguyễn Văn A -
                  </div>
                  <div className="text-sm font-light text-white">
                    Đại học Bách Khoa Hà Nội
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center w-full h-full px-12 text-left lg:px-24">
                <div className="w-[45px] mb-4">
                  <Image
                    className="object-contain w-full h-full"
                    src="/img/reviews/quote.png"
                    alt="Quote"
                    width={45}
                    height={45}
                  />
                </div>
                <div>
                  <p className="mt-4 mb-2 text-lg italic font-light leading-9 md:text-xl lg:text-2xl">
                    “Khóa học rất hay và bổ ích, giảng viên rất nhiệt tình và
                    thân thiện. Em đã học được rất nhiều kiến thức mới và cải
                    thiện được kỹ năng lập trình của mình. Em rất hài lòng với
                    khóa học này..“
                  </p>
                  <div className="text-lg font-medium leading-9">
                    - Nguyễn Văn A -
                  </div>
                  <div className="text-sm font-light text-white">
                    Đại học Bách Khoa Hà Nội
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center w-full h-full px-12 text-left lg:px-24">
                <div className="w-[45px] mb-4">
                  <Image
                    className="object-contain w-full h-full"
                    src="/img/reviews/quote.png"
                    alt="Quote"
                    width={45}
                    height={45}
                  />
                </div>
                <div>
                  <p className="mt-4 mb-2 text-lg italic font-light leading-9 md:text-xl lg:text-2xl">
                    “Khóa học rất hay và bổ ích, giảng viên rất nhiệt tình và
                    thân thiện. Em đã học được rất nhiều kiến thức mới và cải
                    thiện được kỹ năng lập trình của mình. Em rất hài lòng với
                    khóa học này..“
                  </p>
                  <div className="text-lg font-medium leading-9">
                    - Nguyễn Văn A -
                  </div>
                  <div className="text-sm font-light text-white">
                    Đại học Bách Khoa Hà Nội
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="swiper-pagination"></div>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
