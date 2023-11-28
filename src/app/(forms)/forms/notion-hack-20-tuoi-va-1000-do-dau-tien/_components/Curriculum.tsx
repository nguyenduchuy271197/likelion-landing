"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import curriculum from "./curriculum.json";

function CurriculumCard({
  title,
  description,
  day,
}: {
  title: string;
  description: string;
  day: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.5,
      }}
      className="relative bg-[#F4F4F4] p-8 lg:even:mt-40 lg:even:ml-16 lg:odd:mr-16 lg:after:absolute lg:after:w-16 lg:after:h-1 lg:after:bg-[#f4f4f4] lg:odd:after:right-0 lg:odd:after:translate-x-full after:top-1/2 lg:even:after:left-0 lg:even:after:-translate-x-full"
    >
      <div className="space-y-2">
        <span className="font-bold">DAY {day}</span>
        <h4 className="text-2xl font-bold uppercase text-[#F98130]">{title}</h4>
        <div
          className="text-lg [&_ul]:list-disc [&_ul]:pl-8"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Curriculum() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const springScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 20,
    damping: 10,
  });

  return (
    <section>
      <div className="container">
        <div className="space-y-20">
          <h2 className="text-4xl font-bold text-center">
            LỊCH TRÌNH KHÓA HỌC
          </h2>
          <motion.div
            className="relative grid items-start gap-8 sm:grid-cols-2 lg:gap-0"
            ref={containerRef}
          >
            {curriculum.map((c, index) => (
              <CurriculumCard
                key={index}
                title={c.title}
                description={c.description}
                day={index + 1}
              />
            ))}

            {/* Vertical line */}
            <motion.div
              ref={containerRef}
              className={cn(
                "absolute w-1 bg-[#F4F4F4] left-1/2 -translate-x-1/2 h-full origin-top hidden lg:block"
              )}
              transition={{
                duration: 0.5,
              }}
              style={{
                scaleY: springScrollYProgress,
              }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
