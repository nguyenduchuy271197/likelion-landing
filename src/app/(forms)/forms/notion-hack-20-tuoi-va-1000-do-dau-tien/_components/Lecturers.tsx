"use client";

import Image from "next/image";
import Heading from "./Heading";
import teachers from "./data/teachers.json";
import { ITeacher } from "./types";
import { motion } from "framer-motion";

function Lecture({ name, roles, src, description }: ITeacher) {
  return (
    <motion.div
      className="flex flex-col items-center justify-between gap-8 lg:even:flex-row-reverse lg:flex-row"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.5,
      }}
      viewport={{ once: true }}
    >
      <div className="max-w-[350px] w-full shrink-0 space-y-10">
        <div className="relative">
          <div className="relative flex items-end justify-center overflow-hidden aspect-[1/1]">
            <div className="relative z-10 w-[90%] aspect-[1/1]">
              <Image src={src} alt={name} className="" fill />
            </div>
            <div className="absolute top-1/2 w-full h-full rounded-full bg-[#F98130]"></div>
          </div>
          <h4 className="absolute bottom-0 z-10 text-4xl font-bold  -translate-x-1/2 translate-y-1/2 left-1/2 text-[#F98130] w-[110%] text-center bg-white rounded-lg py-2">
            {name}
          </h4>
        </div>
        <ul className="space-y-2 text-center">
          {roles.map((role, index) => (
            <li key={index}>
              <h4 className="text-xl font-bold">{role.position}</h4>
              <p className="text-lg">{role.company}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div
          className="max-w-2xl space-y-6 text-xl description"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Lecturers() {
  return (
    <section className="relative sm:bg-[url('https://res.cloudinary.com/dbscqlwl7/image/upload/v1700796018/forms/notion-webinar/BG_D_s6zofb.png')] bg-[url('https://res.cloudinary.com/dbscqlwl7/image/upload/v1700796019/forms/notion-webinar/BG_M_tnrqsm.png')] bg-cover bg-center pb-20">
      <div className="relative z-10 flex items-center justify-center">
        <div className="relative aspect-[1394/196] w-full">
          <Image
            src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1701319951/forms/notion-webinar/Intersect_pvqef2.svg"
            className=""
            alt=""
            fill
          />
        </div>
        <div className="absolute top-0 -translate-x-1/2 -translate-y-1/2 sm:top-1/2 left-1/2">
          <Heading>THÔNG TIN DIỄN GIẢ</Heading>
        </div>
      </div>
      <div className="container">
        <div className="space-y-4">
          {teachers.map((teacher, index) => (
            <Lecture key={index} {...teacher} />
          ))}
        </div>
      </div>
    </section>
  );
}
