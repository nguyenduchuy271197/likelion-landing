"use client";

import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Button } from "@/components/ui/Button";
import { useRef } from "react";
import { NavigationOptions } from "swiper/types";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useMediaQuery } from "@mantine/hooks";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { IBlog } from "@/types";
import { formatDate } from "@/lib/date";

interface EventProps {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  publishOn: number;
}

function EventCard({
  title,
  description,
  thumbnail,
  slug,
  publishOn,
}: EventProps) {
  return (
    <div className="flex flex-col h-full overflow-hidden border rounded-lg shadow-lg lg:flex-row">
      <div className="lg:grow">
        <div className="relative w-full h-full aspect-[7/3]">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      <div className="w-full h-full p-6 sm:p-8 grow lg:grow-0 lg:max-w-[350px]">
        <div className="flex flex-col justify-between h-full space-y-4 lg:justify-start">
          <div className="space-y-2">
            <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Calendar size={16} />
              <span>{formatDate(publishOn)}</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground line-clamp-5">
              {description}
            </p>
          </div>
          <Button asChild className="self-start w-full lg:w-auto" size="lg">
            <Link href={`/blogs/${slug}`}>Xem thêm</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Events({ blogs }: { blogs: IBlog[] }) {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const mdMatches = useMediaQuery("(min-width: 720px) and (max-width: 1024px)");
  const lgMatches = useMediaQuery("(min-width: 1024px)");

  return (
    <section className="">
      <div className="container px-4">
        <div className="py-10 md:py-20">
          <SectionHeading title="Sự kiện" className="mb-10" />
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
                const navigation = swiper.params
                  .navigation as NavigationOptions;
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
        </div>
      </div>
    </section>
  );
}
