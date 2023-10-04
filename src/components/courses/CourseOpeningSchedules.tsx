"use client";

import { formatNumber } from "@/lib/utils";
import { ICalendar } from "@/types";
import {
  Calendar,
  Clock2,
  DollarSign,
  DoorOpen,
  LucideIcon,
  MapPin,
  PictureInPicture2,
} from "lucide-react";
import { ReactNode } from "react";
import CourseSectionHeading from "./CourseSectionHeading";
import Image from "next/image";

function CourseCalendar({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-2 sm:flex-row">
      <div className="flex items-center">
        <span className="min-w-[40px]">
          <Icon />
        </span>
        <span className="min-w-[120px] font-bold">{label}</span>
      </div>

      <div className="ml-[40px] font-medium">{children}</div>
    </div>
  );
}

function CourseOpeningScheduleCard({
  calendar,
  thumbnail,
}: {
  calendar: ICalendar;
  thumbnail: string;
}) {
  return (
    <div>
      <div className="max-w-screen-lg px-8 mx-auto">
        <div className="relative">
          <div className="p-8 space-y-8 rounded-[3rem] sm:p-12 bg-gradient-to-r from-orange-500 to-orange-400 text-muted">
            <CourseSectionHeading className="max-w-sm">
              Khoá Học Python Cho Data Analysis
            </CourseSectionHeading>

            <div className="text-xl">
              <div className="flex flex-col gap-8">
                {calendar.start_date && (
                  <CourseCalendar label="Khai giảng" icon={DoorOpen}>
                    {calendar.start_date}
                  </CourseCalendar>
                )}
                {calendar.duration && (
                  <CourseCalendar label="Lộ trình học" icon={Calendar}>
                    {calendar.duration}
                  </CourseCalendar>
                )}

                {calendar.schedule && (
                  <CourseCalendar label="Lịch học" icon={Clock2}>
                    {calendar.schedule}
                  </CourseCalendar>
                )}

                {calendar.location && (
                  <CourseCalendar label="Địa điểm" icon={MapPin}>
                    <p>{calendar.location.name}</p>
                    <p>{calendar.location.address}</p>
                  </CourseCalendar>
                )}

                {calendar.platform && (
                  <CourseCalendar label="Platform" icon={PictureInPicture2}>
                    {calendar.platform}
                  </CourseCalendar>
                )}

                {calendar.tuition && (
                  <CourseCalendar label="Học phí" icon={DollarSign}>
                    <p>
                      <span className="font-medium">
                        {formatNumber(calendar.tuition.once.price)}đ/khoá{" "}
                      </span>
                      <span className="text-xs">(Thanh toán trọn gói)</span>
                    </p>
                    hoặc
                    <p>
                      <span className="font-medium">
                        {formatNumber(calendar.tuition.monthly.price)}đ/tháng{" "}
                      </span>
                      <span className="text-xs">
                        (Thanh toán {calendar.tuition.monthly.times} đợt)
                      </span>{" "}
                    </p>
                  </CourseCalendar>
                )}
              </div>
            </div>
          </div>
          <div className="border-[2.5rem] border-muted rounded-full absolute top-0 right-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] -translate-y-1/3 hidden lg:block aspect-[1/1]">
            <Image
              src={thumbnail}
              alt=""
              width={250}
              height={250}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CourseOpeningSchedules({
  calendars,
  thumbnail,
}: {
  calendars?: ICalendar[];
  thumbnail: string;
}) {
  if (!calendars || calendars.length === 0) return null;

  return (
    <section id="schedules">
      <div>
        {calendars.map((calendar) => (
          <CourseOpeningScheduleCard
            calendar={calendar}
            key={calendar.title}
            thumbnail={thumbnail}
          />
        ))}
      </div>
    </section>
  );
}
