"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { TechStackOptions } from "./TechStack";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

type TeacherInfo = {
  title: string;
  description: string;
  avatar: string;
  tech: TechStackOptions;
};

type TeacherPortfolioProps = {
  info: TeacherInfo;
  reverse?: boolean;
};

function TeacherPortfolio({ info, reverse = false }: TeacherPortfolioProps) {
  const { title, description, avatar, tech = [] } = info;

  return (
    <div className="max-w-screen-lg px-8 mx-auto">
      <div
        className={cn(
          "flex flex-col gap-16 [&>*]:basis-full",
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div>
            <h3 className="text-3xl font-extrabold lg:max-w-sm scroll-m-20 lg:text-4xl">
              {title}
              <Image
                src="/img/icons/waving.png"
                width={50}
                height={50}
                alt="Waving"
                className="inline-block ml-4"
              />
            </h3>
            <p className="mt-6 text-lg leading-7 text-muted-foreground">
              {description}
            </p>
          </div>

          <div className="flex gap-8 mt-8">
            <div className="pt-6 text-lg leading-7 whitespace-nowrap">
              Tech Stack |
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {tech.map(({ title, image }) => (
                <div
                  key={title}
                  className="flex items-center justify-center w-[70px] h-[70px] rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-500"
                >
                  <Image src={image} width={30} height={30} alt={title} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-center">
          <motion.div
            className="shadow-2xl avatar-morph"
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Image src={avatar} width={350} height={350} alt={title} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Teachers() {
  return (
    <section className="py-20">
      <SectionHeading
        title="Đội ngũ giảng viên"
        subtitle="Những người sẵn sàng truyền cảm hứng và chia sẻ kiến thức để hỗ trợ các bạn trở thành những lập trình viên tài năng"
      />
      <div className="flex flex-col gap-20">
        <TeacherPortfolio
          info={{
            title: "Front-End Developer/Teacher",
            description:
              "Mình là một frontend developer và giảng viên đầy nhiệt huyết, có hơn 4 năm kinh nghiệm trong lĩnh vực phát triển trang web. Mục tiêu của mình là giúp các học viên trở thành những chuyên gia frontend thành công và phát triển cộng đồng lập trình viên. 📍",
            avatar: "/img/teachers/huy.jpg",
            tech: [
              {
                title: "HTML",
                image: "/img/tech/html.png",
              },
              {
                title: "CSS",
                image: "/img/tech/css.png",
              },
              {
                title: "Javascript",
                image: "/img/tech/js.png",
              },
              {
                title: "Java",
                image: "/img/tech/java.png",
              },
              {
                title: "NodeJS",
                image: "/img/tech/nodejs.png",
              },
            ],
          }}
        />

        <TeacherPortfolio
          info={{
            title: "Front-End React Developer",
            description:
              "Mình là một frontend developer và giảng viên đầy nhiệt huyết, có hơn 4 năm kinh nghiệm trong lĩnh vực phát triển trang web. Mục tiêu của mình là giúp các học viên trở thành những chuyên gia frontend thành công và phát triển cộng đồng lập trình viên. 📍",
            avatar: "/img/teachers/huy.jpg",
            tech: [
              {
                title: "HTML",
                image: "/img/tech/html.png",
              },
              {
                title: "CSS",
                image: "/img/tech/css.png",
              },
              {
                title: "Javascript",
                image: "/img/tech/js.png",
              },
              {
                title: "Java",
                image: "/img/tech/java.png",
              },
              {
                title: "NodeJS",
                image: "/img/tech/nodejs.png",
              },
            ],
          }}
          reverse={true}
        />
      </div>
    </section>
  );
}
