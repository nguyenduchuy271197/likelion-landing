"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Button } from "@/components/ui/Button";
import { useRef } from "react";
import { NavigationOptions } from "swiper/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMediaQuery } from "@mantine/hooks";
import { cn } from "@/lib/utils";
import { TestimonialType } from ".";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialRow({
  testimonials,
}: {
  testimonials: TestimonialType[];
}) {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const smMatches = useMediaQuery("(min-width: 640px)");
  const mdMatches = useMediaQuery("(min-width: 768px)");
  const lgMatches = useMediaQuery("(min-width: 1024px)");
  return (
    <Swiper
      slidesPerView={lgMatches ? 3.3 : mdMatches ? 2.1 : smMatches ? 1.5 : 1.1}
      spaceBetween={32}
      modules={[Navigation]}
      style={{
        height: lgMatches ? 550 : 360,
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
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.avatar}>
          <TestimonialCard {...testimonial} />
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
  );
}
