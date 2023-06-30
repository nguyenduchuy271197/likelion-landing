"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { TechStackOptions } from "./TechStack";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const teachers = [
  {
    title: "Fullstack Developer/Giảng viên",
    name: "Nguyễn Đức Huy",
    description:
      "Hơn 4 năm kinh nghiệm trong lĩnh vực phát triển website và giảng dạy bootcamp. Được học viên yêu mến bởi cách truyền đạt kiến thức khoa học và sự hỗ trợ tận tâm. Mục tiêu là giúp học viên trang bị đầy đủ kiến thức và kỹ năng vững chắc để theo đuổi ngành lập trình. 📍",
    avatar: "/img/teachers/huy.png",
    tech: [
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
        title: "React",
        image: "/img/tech/react.svg",
      },
      {
        title: "NodeJS",
        image: "/img/tech/nodejs.svg",
      },
      {
        title: "Python",
        image: "/img/tech/python.svg",
      },
    ],
  },
  {
    title: "Java Developer/Giảng viên",
    name: "Nguyễn Văn Minh",
    description:
      "Mong muốn lan toả sự thú vị của lập trình và truyền động lực thử thách bản thân đến mọi người. Sử dụng 4 năm kinh nghiệm lập trình Back-end Java giúp học viên xây dựng nền tảng kiên cố cho sự phát triển sau này. 📍",
    avatar: "/img/teachers/minh.png",
    tech: [
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
        title: "Docker",
        image: "/img/tech/docker.svg",
      },
      {
        title: "Spring Boot",
        image: "/img/tech/springboot.svg",
      },
    ],
  },
];

type TeacherInfo = {
  title: string;
  name: string;
  description: string;
  avatar: string;
  tech: TechStackOptions;
};

type TeacherPortfolioProps = {
  info: TeacherInfo;
  reverse?: boolean;
};

function TeacherPortfolio({ info, reverse = false }: TeacherPortfolioProps) {
  const { title, description, avatar, tech = [], name } = info;

  return (
    <div className="max-w-screen-lg px-8 mx-auto">
      <div
        className={cn(
          "flex flex-col-reverse lg:flex-col gap-4 lg:gap-16",
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        )}
      >
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="max-w-lg mx-auto lg:max-w-none">
            <div>
              <div className="text-center lg:text-left">
                <h3 className="mb-1 text-2xl font-bold ">{name}</h3>
                <p className="text-lg font-medium text-muted-foreground">
                  {title}
                </p>
              </div>

              <p className="mt-4 leading-7 text-muted-foreground">
                {description}
              </p>
            </div>

            <div className="flex flex-col gap-2 mt-2 sm:gap-4 sm:mt-6 sm:flex-row">
              <div className="pt-6 font-medium leading-7 whitespace-nowrap">
                Tech Stack <span className="hidden sm:inline">|</span>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {tech.map(({ title, image }) => (
                  <div
                    key={title}
                    className="flex items-center justify-center transition duration-500 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 h-[70px] w-[70px]"
                  >
                    <div className="relative w-[40px] h-[40px]">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain object-center"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-center flex-1">
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[400px] aspect-[1/1]"
          >
            <Image src={avatar} fill alt={title} className="object-contain" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Teachers() {
  return (
    <section className="py-20 md:mb-16">
      <div className="container">
        <SectionHeading
          title="Đội ngũ giảng viên"
          subtitle="Giảng dạy bằng sự đam mê cống hiến cho nền giáo dục IT ở Việt Nam, mong muốn giúp học viên chinh phục lập trình thành công."
        />
      </div>

      <div className="flex flex-col gap-20 pt-10">
        {teachers.map((teacher, index) => (
          <TeacherPortfolio
            info={teacher}
            key={teacher.title}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}
