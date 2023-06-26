"use client";

import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Icons from "@/components/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Button } from "@/components/ui/Button";
import { useRef } from "react";
import { NavigationOptions } from "swiper/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMediaQuery } from "@mantine/hooks";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const testimonials = [
  {
    saying:
      "Mình thấy lộ trình học rất phù hợp cho những người bắt đầu từ con số 0, những người chuyển ngành. Giảng viên dạy rất bài bản giống như mình đang đi học đại học vậy.",
    name: "Bảo Sơn",
    course: "Khóa Full-stack Web Developer Bootcamp 4",
    avatar: "/img/avatar/bs.png",
  },
  {
    saying:
      "Giáo án rõ ràng và được liên kết với nhau rất logic. Mình thấy tụi mình nhanh lên tay nghề hơn và tư duy phản xạ cũng nhanh hơn qua từng project.",
    name: "Hoàng Lưu",
    course: "Khóa Full-stack Web Developer Bootcamp 4",
    avatar: "/img/avatar/hl.png",
  },
  {
    saying:
      "Chương trình học và các đơn vị kiến thức được cấu trúc rất chuyên nghiệp. Bản thân em được trau dồi và phát triển rất nhiều kiến thức chuyên môn.",
    name: "Hoàng Anh",
    course: "Khóa Full-stack Web Developer Bootcamp 4",
    avatar: "/img/avatar/ha.png",
  },
  {
    saying:
      "Thầy dạy rất dễ hiểu. Bây giờ mình đã có thể tự làm ra một trang web cho mình rồi. Tuy trang web chưa có gì quá phức tạp nhưng mình cảm thấy rất tự hào.",
    name: "Thảo Trang",
    course: "Khóa Full-stack Web Developer Bootcamp 4",
    avatar: "/img/avatar/tt.png",
  },
  {
    saying:
      "Các thầy trong khoá thật sự dạy rất nhiệt tình luôn ấy ạ. Mọi người lúc đầu vào đa phần chưa có một chút kiến thức gì về lập trình nên hỏi cũng nhiều lắm.",
    name: "Hoàng Long",
    course: "Khóa Full-stack Web Developer Bootcamp 3",
    avatar: "/img/avatar/lo.png",
  },
];

interface Testimonial {
  saying: string;
  name: string;
  course: string;
  avatar: string;
}

function TestimonialCard({ saying, name, avatar, course }: Testimonial) {
  return (
    <div className="relative flex flex-col justify-center h-full p-4 rounded-lg shadow-lg sm:p-8">
      <Icons.quote className="absolute w-28 right-6 opacity-30 top-4" />
      <div className="absolute right-6 top-4">
        <div className="relative w-28 aspect-[4/3]">
          <Image
            src="/img/reviews/quote.svg"
            alt="Quote"
            fill
            className="opacity-30"
          />
        </div>
      </div>

      <div className="grow">
        <blockquote className="pl-4 mt-6 italic border-[#FFE3CB] border-l-2">
          &quot;{saying}&quot;
        </blockquote>
      </div>

      <div className="flex items-center gap-2">
        <div className="p-1 rounded-full shadow-lg">
          <div className="relative h-[60px] aspect-[1/1] bg-gradient-to-br from-[#FFE3CB] to-[#ff7100] rounded-full overflow-hidden shrink-0 ">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-muted-foreground">{course}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const smMatches = useMediaQuery("(min-width: 640px)");
  const mdMatches = useMediaQuery("(min-width: 768px)");
  const lgMatches = useMediaQuery("(min-width: 1024px)");

  return (
    <section>
      <div className="container px-4">
        <div className="py-10 md:py-20">
          <SectionHeading title="Học viên nói về LIKELION" />

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
              slidesPerView={
                lgMatches ? 3.3 : mdMatches ? 2.1 : smMatches ? 1.5 : 1.1
              }
              spaceBetween={32}
              modules={[Navigation]}
              style={{
                height: lgMatches ? 550 : 360,
                paddingInline: 16,
                paddingBlock: lgMatches ? 80 : 16,
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
