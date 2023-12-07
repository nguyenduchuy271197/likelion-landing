"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "./Heading";

const participants = [
  {
    content:
      "Những bạn trẻ có mục tiêu và yêu thích quản lý thời gian, sắp xếp công việc, sáng tạo nội dung",
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1701193795/forms/notion-webinar/Who_1_woekrf.png",
  },
  {
    content:
      "Những Youtuber, TikToker muốn cải thiện hiệu suất làm việc, quản lý công việc và thời gian hiệu quả",
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1701193795/forms/notion-webinar/Who_2_oneiji.png",
  },
  {
    content:
      "Học sinh, sinh viên, người đi làm muốn tìm hiểu về Notion để ứng dụng vào đời sống hàng ngày",
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1701193794/forms/notion-webinar/Who_3_dkcf6y.png",
  },
];

export default function Participants() {
  return (
    <section id="doi-tuong">
      <div className="max-w-screen-md px-8 mx-auto">
        <div className="space-y-16">
          <Heading>ĐỐI TƯỢNG THAM GIA</Heading>

          <div className="grid gap-8">
            {participants.map((participant, index) => (
              <motion.div
                key={index}
                className="relative sm:p-12 rounded-[4rem] bg-[#AFDFFD] lg:mt-20 space-y-4 p-8"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
              >
                <div
                  className={cn(
                    "relative lg:absolute aspect-[1/1] w-[200px] lg:w-[280px] bottom-0 mx-auto",
                    index % 2 === 1 ? "left-0" : "right-0"
                  )}
                >
                  <Image src={participant.src} alt="" fill />
                </div>
                <div
                  className={cn(
                    "lg:w-3/5 text-xl",
                    index % 2 === 1 && "ml-auto"
                  )}
                >
                  {participant.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
