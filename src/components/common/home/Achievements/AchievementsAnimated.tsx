"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function AchievementsAnimated({
  children,
}: {
  children: ReactNode;
}) {
  return (
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
      {children}
    </motion.div>
  );
}
