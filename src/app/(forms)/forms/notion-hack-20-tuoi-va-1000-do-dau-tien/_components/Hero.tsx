import Image from "next/image";
import HeroCountDown from "./HeroCountDown";
import { LucideProps } from "lucide-react";
import Link from "next/link";
import { ITeacher } from "./types";
import teachers from "./data/teachers.json";
import { Button } from "./Button";

function Teacher({ name, roles, src }: ITeacher) {
  return (
    <div className="bg-[#C5ECFF] p-2 pr-4 lg:pr-8 rounded-[4rem] lg:rounded-[8rem] flex items-center gap-4 lg:min-w-[450px]">
      <div className="relative aspect-[1/1] h-20 lg:h-32 rounded-full bg-white overflow-hidden shrink-0">
        <Image
          className="object-contain object-bottom"
          src={src}
          alt={name}
          fill
        />
      </div>
      <div className="space-y-1">
        <h5 className="text-xl font-bold">{name}</h5>
        <ul className="space-y-2">
          {roles.map((role, index) => (
            <li key={index}>
              <h4 className="font-bold">{role.position}</h4>
              <p className="text-sm">{role.company}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative sm:bg-[url('https://res.cloudinary.com/dbscqlwl7/image/upload/v1701414716/forms/notion-webinar/BG_D_kuwso2.png')] bg-[url('https://res.cloudinary.com/dbscqlwl7/image/upload/v1701414716/forms/notion-webinar/BG_M_bz3rai.png')] bg-cover bg-center pb-32">
      <div className="min-h-screen space-y-8">
        <div className="relative aspect-[3.5/1] sm:aspect-[1920/348] max-w-screen-2xl mx-auto">
          <Image
            src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1701160397/forms/notion-webinar/Banner_Hero_ro6oaj.png"
            alt=""
            className="object-cover object-center"
            fill
            quality={100}
          />
        </div>
        <div className="container">
          <div className="space-y-10">
            {/* Banner */}
            <div className="relative aspect-[1000/347] max-w-lg mx-auto">
              <Image
                className=""
                src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1701160148/forms/notion-webinar/Typo_Date_time_byr2m6.png"
                alt=""
                fill
              />
            </div>

            {/* Teachers */}
            <div className="flex flex-col justify-center max-w-md gap-4 mx-auto lg:flex-row lg:max-w-none">
              {teachers.map((teacher, index) => (
                <Teacher key={index} {...teacher} />
              ))}
            </div>

            {/* Free Attention */}
            <div className="lg:hidden relative aspect-[1000/493] mx-auto max-w-[250px]">
              <Image
                className="rotate-12"
                src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1701160148/forms/notion-webinar/Free_Tag_1_feoeic.png"
                alt=""
                fill
              />
            </div>

            {/* Button */}
            <div className="hidden lg:block relative max-w-md mx-auto !my-28">
              <div className="flex justify-center">
                <Button className="w-full" asChild>
                  <Link href="#form">Đăng ký ngay</Link>
                </Button>
              </div>
              <div className="absolute aspect-[1000/493] w-[220px] top-0 left-0 -translate-x-[calc(100%+6rem)] -translate-y-1/2">
                <Image
                  className="-rotate-12"
                  src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1701160148/forms/notion-webinar/Free_Tag_1_feoeic.png"
                  alt=""
                  fill
                />
                <Arrow className="absolute right-0 w-24 translate-x-full" />
              </div>
              <div className="absolute z-10 right-0 translate-x-[calc(100%+2rem)]">
                <div className="-rotate-12">
                  <HeroCountDown />
                </div>
                <Arrow className="absolute top-0 left-0 w-24 rotate-180 -translate-x-full" />
              </div>
            </div>

            {/* Button mobile */}
            <div className="flex justify-center max-w-md mx-auto lg:hidden">
              <Button className="w-full" asChild>
                <Link href="#form">Đăng ký ngay</Link>
              </Button>
            </div>

            {/* Countdown */}
            <div className="lg:hidden">
              <HeroCountDown />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 70 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.8692 4.04008C8.8592 2.58008 16.3092 3.87001 22.4692 7.47001C25.5192 9.25001 28.5792 11.65 30.4592 14.69C31.9992 17.17 32.7792 21.7001 29.5492 23.3401C27.1892 24.5401 24.3092 22.43 23.4992 20.21C22.4092 17.23 25.0092 14.4899 27.5692 13.4099C31.0692 11.9199 34.9792 13.03 38.1992 14.68C41.4192 16.33 44.6992 18.6701 47.5992 21.0901C54.1192 26.5301 59.5192 33.18 63.5192 40.67C64.4292 42.37 67.0192 40.8599 66.1092 39.1599C61.8392 31.1699 55.9792 24.0201 48.9392 18.3201C42.6392 13.2301 33.1992 6.50015 24.9792 11.3702C21.7792 13.2702 19.3592 17.0701 20.5592 20.8601C21.5792 24.0901 24.8692 26.82 28.3492 26.67C32.3992 26.5 34.8692 22.5701 34.8192 18.8001C34.7592 14.3101 31.5092 10.5701 28.2392 7.86014C20.7392 1.65014 10.5992 -0.850071 1.07922 1.13993C-0.810783 1.52993 -0.0107948 4.43007 1.87921 4.03007L1.8692 4.04008Z"
        fill="white"
      />
      <path
        d="M53.4592 34.2604C57.0192 37.2004 60.5792 40.1404 64.1492 43.0804C64.9192 43.7204 66.4492 43.6403 66.6592 42.4203C67.5992 36.7703 68.5392 31.1103 69.4792 25.4603C69.6092 24.6603 69.2692 23.8505 68.4292 23.6105C67.7092 23.4105 66.7192 23.8503 66.5792 24.6603C65.6392 30.3103 64.6992 35.9705 63.7592 41.6205L66.2692 40.9603C62.7092 38.0203 59.1492 35.0803 55.5792 32.1403C54.9592 31.6203 54.0692 31.5303 53.4592 32.1403C52.9292 32.6703 52.8292 33.7404 53.4592 34.2604Z"
        fill="white"
      />
    </svg>
  );
}
