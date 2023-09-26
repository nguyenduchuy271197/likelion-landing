"use client";

import { motion } from "framer-motion";
import { WorkspaceOption, workspaceOptions } from "./workspaces";
import { ParallaxText } from "../TechStack";
import SectionHeading from "../SectionHeading";
import Image from "next/image";

export function WorkspacesParallax({
  options,
  velocity,
}: {
  options: WorkspaceOption[];
  velocity: number;
}) {
  return (
    <ParallaxText baseVelocity={velocity}>
      {options.map(({ title, src }) => (
        <div
          key={title}
          className="relative w-[160px] lg:w-[200px] aspect-[2/1]"
        >
          <Image src={src} alt={title} className="object-contain" fill />
        </div>
      ))}
    </ParallaxText>
  );
}

export default function Workspaces() {
  return (
    <section className="py-20 md:mb-16">
      <div className="container">
        <SectionHeading title="Học viên LIKELION làm việc ở đâu?" />
      </div>
      <motion.div
        className="flex flex-col gap-4 mt-24 tech-stack-row"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          delay: 0.3,
        }}
        viewport={{ once: true }}
      >
        <WorkspacesParallax options={workspaceOptions} velocity={2} />
      </motion.div>
    </section>
  );
}
