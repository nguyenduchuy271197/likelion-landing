"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IBlog } from "@/types";
import EventCard from "./EventCard";

export default function EventList({ events }: { events: IBlog[] }) {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="relative">
      <Swiper
        slidesPerView={1.1}
        breakpoints={{
          510: {
            slidesPerView: 1.4,
          },
          700: {
            slidesPerView: 2.1,
          },
          960: {
            slidesPerView: 3.1,
          },
        }}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.slug}>
            <EventCard {...event} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        onClick={() => swiperRef.current?.slidePrev()}
        variant="ghost"
        className="absolute z-10 hidden w-16 h-16 -translate-y-1/2 rounded-full -left-20 top-1/2 lg:flex"
      >
        <ChevronLeft className="w-12 h-12" />
      </Button>
      <Button
        onClick={() => swiperRef.current?.slideNext()}
        variant="ghost"
        className="absolute z-10 hidden w-16 h-16 p-3 -translate-y-1/2 rounded-full -right-20 top-1/2 lg:flex"
      >
        <ChevronRight className="w-12 h-12" />
      </Button>
    </div>
  );
}
