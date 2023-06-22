"use client";

import { ReactNode, useRef } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

type TechStackOption = {
  title: string;
  image: string;
};

export type TechStackOptions = TechStackOption[];

const techStackOptions: TechStackOptions = [
  {
    title: "HTML",
    image: "/img/tech/html.svg",
  },
  {
    title: "CSS",
    image: "/img/tech/css.svg",
  },
  {
    title: "Javascript",
    image: "/img/tech/js.svg",
  },
  {
    title: "Java",
    image: "/img/tech/java.svg",
  },
  {
    title: "NodeJS",
    image: "/img/tech/nodejs.svg",
  },
  {
    title: "Python",
    image: "/img/tech/python.svg",
  },
  {
    title: "React",
    image: "/img/tech/react.svg",
  },
  {
    title: "Docker",
    image: "/img/tech/docker.svg",
  },
  {
    title: "Java",
    image: "/img/tech/java.svg",
  },
  {
    title: "Spring Boot",
    image: "/img/tech/springboot.svg",
  },
];

type ParallaxProps = {
  children: ReactNode;
  baseVelocity: number;
};

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="flex flex-no-wrap overflow-hidden whitespace-no-wrap">
      <motion.div
        className="flex flex-no-wrap gap-12 whitespace-no-wrap md:gap-24"
        style={{ x }}
      >
        <div className="flex items-center gap-12 md:gap-24">{children} </div>
        <div className="flex items-center gap-12 md:gap-24">{children} </div>
        <div className="flex items-center gap-12 md:gap-24">{children} </div>
        <div className="flex items-center gap-12 md:gap-24">{children} </div>
      </motion.div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="py-20 md:mb-16">
      <SectionHeading
        title="Ngôn ngữ đào tạo"
        subtitle="Kiến thức và công nghệ mới nhất sẽ luôn được cập nhật trong lộ trình giảng dạy giúp học viên đáp ứng yêu cầu của thị trường."
      />
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
        <ParallaxText baseVelocity={-2}>
          {techStackOptions.map((item) => (
            <div
              key={item.title}
              className="relative w-[90px] lg:w-[120px] aspect-[1/1]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </ParallaxText>
      </motion.div>
    </section>
  );
}
