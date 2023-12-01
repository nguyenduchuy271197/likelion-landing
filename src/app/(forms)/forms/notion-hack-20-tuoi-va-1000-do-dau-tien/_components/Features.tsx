"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideInAnimationVariants } from "./animations";

const features = [
  {
    id: "1",
    title: `<p>Theo dõi tiến độ,</p><p>Lên kế hoạch,</p><p>Nhắc nhở lịch trình</p>`,
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1701143782/forms/notion-webinar/Lion_1_cueg50.png",
  },
  {
    id: "2",
    title: "Tự động hóa quy trình",
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1701143782/forms/notion-webinar/Lion_2_esy4jt.png",
  },
  {
    id: "3",
    title: "Cá nhân hoá và tuỳ biến template",
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1701143782/forms/notion-webinar/Lion_3_ckw7wb.png",
  },
  {
    id: "4",
    title:
      "<p>Trợ lý ảo Notion AI,</p><p>mở rộng với Notion API và tích hợp ChatGPT</p>",
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1701143782/forms/notion-webinar/Lion_4_jgth6a.png",
  },
];

export default function Features() {
  return (
    <section className="space-y-12">
      <div className="relative aspect-[3.5/1] sm:aspect-[1920/394]">
        <Image
          src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1701413367/forms/notion-webinar/Banner_Info_gzivfg.png"
          alt=""
          className="object-cover object-center"
          fill
          quality={100}
        />
      </div>
      <div className="container">
        <div className="space-y-12">
          <motion.div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                className="max-w-xs mx-auto space-y-8"
                key={feature.id}
                variants={slideInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{ once: true }}
              >
                <div className="relative h-[200px]">
                  <Image
                    src={feature.src}
                    alt=""
                    className="object-contain"
                    fill
                  />
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: feature.title,
                  }}
                  className="max-w-[220px] text-xl text-center mx-auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
