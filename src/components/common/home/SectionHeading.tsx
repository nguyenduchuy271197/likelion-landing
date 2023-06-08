"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="container">
      <motion.div
        className="max-w-xl py-10 mx-auto mb-10 text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        <motion.h2
          className="mb-6 text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl"
          variants={item}
        >
          {title}
        </motion.h2>
        <motion.p className="text-xl text-muted-foreground" variants={item}>
          {subtitle}
        </motion.p>
      </motion.div>
    </div>
  );
}
