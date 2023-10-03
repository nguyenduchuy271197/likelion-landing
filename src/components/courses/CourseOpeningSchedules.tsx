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
  background,
}: {
  calendar: ICalendar;
  background: {
    from: string;
    to: string;
  };
}) {
  return (
    <div
      className="relative flex flex-col max-w-screen-xl p-8 mx-auto rounded-tl-[3rem] rounded-tr-[3rem] sm:p-12 text-muted"
      style={{
        background: `linear-gradient(to right,  ${background.from} 0%,${background.to} 100%)`,
      }}
    >
      <div className="container">
        <div className="space-y-8">
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
      </div>
    </div>
  );
}

export default function CourseOpeningSchedules({
  calendars,
  background,
}: {
  calendars?: ICalendar[];
  background: {
    from: string;
    to: string;
  };
}) {
  if (!calendars || calendars.length === 0) return null;

  return (
    <section id="schedules">
      <div>
        {calendars.map((calendar) => (
          <CourseOpeningScheduleCard
            calendar={calendar}
            key={calendar.title}
            background={background}
          />
        ))}
      </div>
    </section>
  );
}
