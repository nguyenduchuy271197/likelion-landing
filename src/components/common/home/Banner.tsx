"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
const Achievement = dynamic(
  () => import("@/components/common/home/Achievement")
);

const banners = [
  {
    href: "/courses/khoa-hoc-lap-trinh-web-fullstack",
    src: {
      sm: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688543394/home/banners/fullstack-mb.png",
      lg: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688543234/home/banners/fullstack.png",
    },
    title: "Bootcamp lập trình web Fullstack",
    description: "Khoá học giúp bạn trở thành lập trình viên chỉ sau 3 tháng",
  },
  {
    href: "/courses/thanh-thao-lap-trinh-web-front-end",
    src: {
      sm: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1692668539/home/banners/Cover_Front-end_Mobile_a1zjb0.png",
      lg: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1692668539/home/banners/Cover_Front-end_Desktop_ta7mes.png",
    },
    title: "Thành Thạo Lập Trình Web Front-End",
    description:
      "Bắt đầu sự nghiệp lập trình web Front-end chỉ trong 2 tháng (khoá offline) hoặc 3 tháng (khoá online)",
  },
  {
    href: "/courses/khoa-hoc-python-cho-data-analysis",
    src: {
      sm: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1692668541/home/banners/Cover_Python_Mobile_ccrkgp.png",
      lg: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1692668540/home/banners/Cover_Python_Desktop_fmmq3m.png",
    },
    title: "Python Cho Data Analysis",
    description:
      "Thành thạo các thao tác xử lý dữ liệu và trực quan hóa dữ liệu với Python chỉ trong 3 tháng",
  },
  {
    href: "/courses/khoa-hoc-back-end-java",
    src: {
      sm: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1692668541/home/banners/Cover_Java_Mobile_oggmec.png",
      lg: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1692668541/home/banners/Cover_Java_Desktop_guhoj4.png",
    },
    title: "Back-End Java",
    description:
      "Sử dụng thành thạo Spring Framework, Spring Boot để xây dựng web một cách nhanh chóng chỉ trong 3 tháng",
  },
  {
    href: "/courses/khoa-hoc-back-end-php",
    src: {
      sm: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1692668540/home/banners/Cover_PHP_Mobile_ryh5de.png",
      lg: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1692668539/home/banners/Cover_PHP_Desktop_z8jpma.png",
    },
    title: "Back-End PHP",
    description:
      "Sử dụng thành thạo PHP, MySQL, Laravel để phát triển website đa dạng và mạnh mẽ chỉ trong 3 tháng",
  },

  {
    href: "/about",
    src: {
      sm: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688543393/home/banners/hyl-mb.png",
      lg: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688543234/home/banners/hyl.png",
    },
    title: "Hack Your Life",
    description: "Từ con số 0 đến thành thạo các kỹ năng",
  },
];

const bannerConfig = {
  autoplayDelay: 5000,
};

export default function Banner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
      }}
      className="relative mb-20"
    >
      {/* Banner */}
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        speed={750}
        loop={true}
        mousewheel={{
          forceToAxis: true,
        }}
        autoplay={{
          delay: bannerConfig.autoplayDelay,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          dynamicBullets: true,
          renderBullet: function (index, className) {
            return `<span class="${className} swiper-pagination-bullet--svg-animation"><svg viewBox="0 0 28 28"><circle class="svg__circle" style="--duration:${bannerConfig.autoplayDelay}ms" cx="14" cy="14" r="12" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="6" stroke-width="4"></circle></svg></span>`;
          },
        }}
        modules={[Autoplay, Pagination, Mousewheel]}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.title}>
            <Link href={banner.href} className="relative">
              <picture>
                <source srcSet={banner.src.lg} media="(min-width: 768px)" />
                <Image
                  src={banner.src.sm}
                  alt={banner.title}
                  className="absolute top-0 left-0 object-center w-full h-full -z-10"
                  fill
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRvgEAABXRUJQVlA4WAoAAAAgAAAAhQIApQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggCgMAANAkAJ0BKoYCpgA+7XaxVqmnJCOgKEkwHYlpbt+rH39jH6BYJxZ3XjH6AE+LOnTp06dHT8wyyZMmTJkyZMmTJaiGMkb3FAwxXKWqNeaRGY/hZMJW5po8U/fTNvhozdLDm5+X4XvTRacyKCkR/WCLHtI3aghIPMTn9moi7fn5je53ITEwlI90tSTkQjwkU39FuA1RVOhyExMJPza8Ua6SxXTyzdCs1UgrCgkBrrADjFJ6motTf38W+fQd5NwOFAcCDdS95rLpIX+zUXuC/q3xRU2Xt5MDepfgoY0BZ+Je7t7lz1do+YsPMvW8hz2hhCDvhALGJwL5EhUwyVm9ts2wpaVEPVaCJrxN7PobCC/Kzz15zAxMTOYMhvzK6913+UytcRIy3yGkxqlxSWki4iLgAAD+0vt/1t/EH8QYAf+4P51/thbreDysupxe9jNFs6Bz/TXqZYC/NGABRhZJ5nR6xza6H27nnNvookDm5w/XmaHpLnmO6ANrKLp0qamvSvDnBQ28XaAUZ78CtGg/8GR2/c8WKoqLVbZHo4ryyDS2Y/b1hLxPUtTmyNUOCkx4Hm15qoByZ1Dv/HElQSWt2EPi8PmAWFK4O7/ZXAghPDatl/YO2xRBUNteEaeUQKtCJyVHmzMEfFpz3zbu3aTKIzb60d6qKXeJGolF/P4Wz71G9wOZe2TR6u+49mXvP0bgs/qGqtUD8aCkzhSKVfQV9bv1J/wuhoJJ3jCAWN32v4xt0piOLUqk2qPfvIFwtc4qR1ecDCoNGcYCyIH5tjj9WN44ozzBdNkoakms1niNYExLl4L8XHMAl3UutRMty8MZo3JAa1BGg9USBOnCRUZyDpZJZDp/A63/PGL5R5JMgvV1ZTvKvjcThKo9e/7VOx70Wxj8qXTwzUihsEud8RMHoK61YgWHHQO9Rjjo6ZhfWo8llFMN/dhKp3hXUBP/2TIoGi/gQPQG2pz1eHhej3gy0bONuBU0XrbCMRjBl3vtWW7ccKJJxseXYjfpAAOoJQgKnvRAWBNRGNAYLOwAAAA="
                />
              </picture>
              <div className="container">
                <div className="h-[65vh] md:h-[75vh] flex items-end md:items-center py-12">
                  <div className="max-w-lg text-left text-white lg:max-w-xl">
                    <h2 className="flex items-center gap-2 mb-4 text-4xl font-bold capitalize md:text-5xl lg:text-6xl">
                      {banner.title}
                    </h2>
                    <p className="lg:text-xl">{banner.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>

      {/* Achievements */}
      <div className="z-20 md:-translate-y-1/2 md:-translate-x-1/2 md:container md:absolute top-full left-1/2">
        <Achievement />
      </div>
    </motion.section>
  );
}
