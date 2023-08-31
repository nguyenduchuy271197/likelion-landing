"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export function TeacherInfoAnimated({
  reverse = false,
  children,
}: {
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex-1"
    >
      {children}
    </motion.div>
  );
}

export function TeacherAvatarAnimated({
  reverse = false,
  children,
}: {
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: reverse ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative w-full max-w-[400px] aspect-[1/1]"
    >
      {children}
    </motion.div>
  );
}
