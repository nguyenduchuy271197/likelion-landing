"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import Icons from "@/components/Icons";
import { LucideProps } from "lucide-react";

const achievements: Achievement[] = [
  {
    icon: Icons.student,
    label: "Học viên",
    count: 24000,
    startCount: 22000,
    suffix: "+",
    duration: 3,
  },
  {
    icon: Icons.coding,
    label: "Năm kinh nghiệm giáo dục",
    count: 10,
    startCount: 0,
    suffix: "",
    duration: 5,
  },
  {
    icon: Icons.star,
    label: "Học viên hài lòng",
    count: 95,
    startCount: 50,
    suffix: "%",
    duration: 3,
  },
];

type Achievement = {
  count: number;
  startCount: number;
  label: string;
  icon: (props: LucideProps) => JSX.Element;
  suffix?: string;
  duration?: number;
};

function AchievementCard({
  count,
  label,
  icon: Icon,
  suffix,
  startCount = 0,
  duration = 5,
}: Achievement) {
  return (
    <div className="flex items-center w-full max-w-xs gap-4 md:text-center md:flex-col lg:flex-row lg:text-start">
      <div className="flex items-center justify-center w-[80px] aspect-[1/1] bg-[#fff3ea] rounded-full">
        <Icon fill="#ff7100" className="w-[30px]" />
      </div>

      <div className="flex flex-col gap-1">
        <CountUp
          start={startCount}
          end={count}
          duration={duration}
          suffix={suffix}
          className="text-3xl font-bold"
        />

        <h3 className="text-lg text-muted-foreground md:text-base">{label}</h3>
      </div>
    </div>
  );
}

export default function Achievement() {
  return (
    <section className="container py-20 bg-white border-b md:py-10 md:shadow-lg md:rounded-2xl md:border-none">
      <motion.div
        className="flex flex-col items-center justify-between gap-12 md:gap-6 md:flex-row"
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
        viewport={{ once: true }}
      >
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.label} {...achievement} />
        ))}
      </motion.div>
    </section>
  );
}
