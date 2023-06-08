"use client";

import CountUp from "react-countup";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import { AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

type AchievementCardProps = {
  count: number;
  title: string;
  src: string;
};

function AchievementCard({ count, title, src }: AchievementCardProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div>
        <Image src={src} alt={title} width={150} height={150} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-6xl font-extrabold tracking-tight scroll-m-20 lg:text-8xl">
          <CountUp end={count} duration={5} suffix="+" />
        </div>

        <h3 className="text-xl text-muted-foreground">{title}</h3>
      </div>
    </div>
  );
}

export default function Achievement() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 200px -200px 0px",
  });
  return (
    <section className="py-20 border bg-gradient-to-r to-transparent from-[#fafafa]">
      <SectionHeading title="Các thành tựu đạt được" />
      <div className="container">
        <div ref={ref} className="min-h-[200px]">
          <AnimatePresence>
            {isInView && (
              <motion.div
                className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4"
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.4,
                }}
                exit={{
                  opacity: 0,
                  y: 50,
                }}
              >
                <AchievementCard
                  count={30}
                  title="Học viên"
                  src="/img/illustrations/achievements/Boy Student.svg"
                />
                <AchievementCard
                  count={100}
                  title="Giảng viên"
                  src="/img/illustrations/achievements/Boy Student.svg"
                />
                <AchievementCard
                  count={100}
                  title="Trường đại học"
                  src="/img/illustrations/achievements/Boy Student.svg"
                />
                <AchievementCard
                  count={20}
                  title="Công ty hợp tác"
                  src="/img/illustrations/achievements/Boy Student.svg"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
