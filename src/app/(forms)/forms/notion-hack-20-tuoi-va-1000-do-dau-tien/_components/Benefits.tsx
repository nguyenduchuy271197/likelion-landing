"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideInAnimationVariants } from "./animations";
import Heading from "./Heading";

const benefits = [
  {
    title: "THỰC HÀNH TẠI CHỖ",
    description: "Bài tập thực tế có thể áp dụng ngay lập tức",
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1701193149/forms/notion-webinar/Benefit_1_vbpr58.png",
  },
  {
    title: "CỘNG ĐỒNG KẾT NỐI",
    description: "Cơ hội kết nối và học hỏi từ cộng đồng người dùng Notion",
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1701193148/forms/notion-webinar/Benefit_2_hyyhz1.png",
  },
  {
    title: "TÀI NGUYÊN TRUY CẬP",
    description: "Các buổi học sẽ được ghi lại và gửi bạn tham khảo.",
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1701193148/forms/notion-webinar/Benefit_3_v1nnnh.png",
  },
];

export default function Benefits() {
  return (
    <section>
      <div className="container">
        <div className="space-y-20">
          <Heading>14H CÙNG NOTION HACK CÓ GÌ?</Heading>
          <motion.div className="grid gap-8 sm:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                className="max-w-sm mx-auto space-y-8 text-center"
                key={index}
                variants={slideInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
              >
                <div className="relative h-[200px]">
                  <Image
                    src={benefit.src}
                    alt=""
                    className="object-contain"
                    fill
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold uppercase">
                    {benefit.title}
                  </h4>
                  <p className="text-lg max-w-[250px]">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
