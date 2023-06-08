"use client";

import React from "react";
import Logo from "../../Logo";
import { Mail, PhoneCall } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fafafa"
          fillOpacity={1}
          d="M0,32L30,69.3C60,107,120,181,180,181.3C240,181,300,107,360,69.3C420,32,480,32,540,53.3C600,75,660,117,720,128C780,139,840,117,900,122.7C960,128,1020,160,1080,176C1140,192,1200,192,1260,192C1320,192,1380,192,1410,192L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        />
      </svg>

      <div className="bg-[#fafafa]">
        <div className="container">
          <div className="pt-6 pb-16 md:pt-0">
            <motion.div
              className="flex flex-col justify-between gap-12 md:flex-row"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.3,
              }}
            >
              <div className="max-w-sm">
                <Logo />
                <p className="mt-6 text-lg leading-7 text-muted-foreground">
                  Từ người mới bắt đầu đến chuyên gia, bạn đều có thể tìm được
                  khóa học phù hợp để nâng cao kỹ năng lập trình của mình.
                </p>

                <div className="flex flex-col gap-2 mt-10 font-medium">
                  <div className="flex items-center gap-4">
                    <PhoneCall />
                    <p>(123) -456-789</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail />
                    <p>tranthuytien@likelion.net</p>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="mb-4 text-xl font-semibold tracking-tight uppercase scroll-m-20">
                  Công ty
                </h5>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="#">Blogs</Link>
                  </li>
                  <li>
                    <Link href="#">Về chúng tôi</Link>
                  </li>
                  <li>
                    <Link href="#">Liên hệ</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="mb-4 text-xl font-semibold tracking-tight uppercase scroll-m-20">
                  Giờ làm việc
                </h5>
                <ul className="flex flex-col gap-2">
                  <li>Thứ 2 - 6: 9:00AM - 9:00PM</li>
                  <li>Thứ 7: 9:00AM - 19:00PM</li>
                  <li>Chủ nhật: Đóng cửa</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
