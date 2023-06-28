"use client";

import SectionHeading from "./SectionHeading";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { motion } from "framer-motion";
import { CourseType, courses } from "@/components/layouts/navbar/Navbar";

function CourseCard({ src, title, statuses, href }: CourseType) {
  return (
    <div className="flex flex-col overflow-hidden transition duration-300 group hover:-translate-y-2">
      <Link
        href={href}
        className="relative overflow-hidden aspect-[4/3] rounded-2xl hover:shadow"
      >
        <Image
          src={src}
          alt={title}
          width={400}
          height={200}
          className="object-cover object-center w-full h-full transition duration-300"
        />
        <div className="absolute top-0 left-0 w-full h-full transition opacity-0 bg-black/50 z-[1] group-hover:opacity-100 duration-300"></div>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2  top-1/2 group-hover:opacity-100 z-[2] opacity-0 transition duration-300">
          <Button variant="secondary">Xem khoá học</Button>
        </div>
      </Link>
      <div className="pt-4 grow">
        <Link href={href} className="mb-2 text-xl font-semibold transition">
          {title}
        </Link>

        <div className="flex items-center gap-2">
          {statuses.map((status) => (
            <Badge
              variant="outline"
              key={status}
              className="pointer-events-none"
            >
              {status}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Courses() {
  return (
    <section>
      <div className="container">
        <div className="py-6 md:py-20">
          <SectionHeading
            title="Khóa học dẫn bạn đến thành công"
            subtitle="Người mới bắt đầu? Chưa có kinh nghiệm? Khoá học lập trình của LIKELION hỗ trợ bạn mọi lúc trên con đường học tập của mình. "
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
            viewport={{ once: true }}
          >
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course.title} {...course} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
