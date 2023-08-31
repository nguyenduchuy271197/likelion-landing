"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Button } from "@/components/ui/Button";
import { useRef } from "react";
import { NavigationOptions } from "swiper/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMediaQuery } from "@mantine/hooks";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import EventCard from "./EventCard";
import { IBlog } from "@/types";

export default function EventList({ blogs }: { blogs: IBlog[] }) {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const mdMatches = useMediaQuery("(min-width: 720px) and (max-width: 1024px)");
  const lgMatches = useMediaQuery("(min-width: 1024px)");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.5,
      }}
      viewport={{ once: true }}
    >
      <Swiper
        slidesPerView={mdMatches ? 1.5 : lgMatches ? 1 : 1.05}
        spaceBetween={32}
        modules={[Navigation]}
        style={{
          // height: lgMatches ? 700 : 600,
          paddingInline: 16,
          paddingTop: lgMatches ? 80 : 16,
          overflowY: "visible",
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          const navigation = swiper.params.navigation as NavigationOptions;
          navigation.prevEl = navigationPrevRef.current;
          navigation.nextEl = navigationNextRef.current;
        }}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.title}>
            <EventCard
              title={blog.title}
              description={blog.excerpt}
              thumbnail={blog.thumbnail_desktop}
              slug={blog.slug}
              publishOn={blog.publishOn}
            />
          </SwiperSlide>
        ))}
        <div
          className={cn(
            "absolute top-0 right-0 items-center gap-4",
            lgMatches ? "flex" : "hidden"
          )}
        >
          <Button
            ref={navigationPrevRef}
            variant="outline"
            className="h-16 rounded-full aspect-[1/1] border-2"
          >
            <ChevronLeft />
          </Button>
          <Button
            ref={navigationNextRef}
            variant="outline"
            className="h-16 rounded-full aspect-[1/1] border-2"
          >
            <ChevronRight />
          </Button>
        </div>
      </Swiper>
    </motion.div>
  );
}
