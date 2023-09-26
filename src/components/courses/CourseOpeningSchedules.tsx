"use client";

import { cn, formatNumber } from "@/lib/utils";
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
import { ReactNode, useContext } from "react";
import { Button } from "../ui/Button";
import { RegisterDialogContext } from "@/context/RegisterDialogProvider";
import Link from "next/link";
import CourseSectionHeading from "./CourseSectionHeading";

function CourseCalendarSingle({
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
        <span className="min-w-[120px] font-medium">{label}</span>
      </div>

      <div className="ml-[40px] lg:ml-0">{children}</div>
    </div>
  );
}

function CourseCalendarRow({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-2">
      <span className="min-w-[32px] mt-1">
        <Icon size={20} />
      </span>
      <div>
        <div className="font-medium">{label}</div>
        <div className="">{children}</div>
      </div>
    </div>
  );
}

function CourseOpeningScheduleCard({
  calendar,
  slug,
  layout = "single",
}: {
  calendar: ICalendar;
  slug: string;
  layout?: "single" | "double";
}) {
  const { setOpen: setDialogOpen } = useContext(RegisterDialogContext);

  return (
    <div className="relative flex flex-col px-6 py-6 space-y-6 sm:py-8 sm:px-8 rounded-xl text-muted bg-primary">
      <h4 className="text-[#FFB37B] font-medium text-xl">{calendar.title}</h4>

      {layout === "double" ? (
        <div className="space-y-6 grow">
          {calendar.start_date && (
            <CourseCalendarRow label="Khai giảng" icon={DoorOpen}>
              {calendar.start_date}
            </CourseCalendarRow>
          )}
          {calendar.duration && (
            <CourseCalendarRow label="Lộ trình học" icon={Calendar}>
              {calendar.duration}
            </CourseCalendarRow>
          )}

          {calendar.schedule && (
            <CourseCalendarRow label="Lịch học" icon={Clock2}>
              {calendar.schedule}
            </CourseCalendarRow>
          )}

          {calendar.location && (
            <CourseCalendarRow label="Địa điểm" icon={MapPin}>
              <p>{calendar.location.name}</p>
              <p>{calendar.location.address}</p>
            </CourseCalendarRow>
          )}

          {calendar.platform && (
            <CourseCalendarRow label="Platform" icon={PictureInPicture2}>
              {calendar.platform}
            </CourseCalendarRow>
          )}

          {calendar.tuition && (
            <CourseCalendarRow label="Học phí" icon={DollarSign}>
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
            </CourseCalendarRow>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {calendar.start_date && (
            <CourseCalendarSingle label="Khai giảng" icon={DoorOpen}>
              {calendar.start_date}
            </CourseCalendarSingle>
          )}
          {calendar.duration && (
            <CourseCalendarSingle label="Lộ trình học" icon={Calendar}>
              {calendar.duration}
            </CourseCalendarSingle>
          )}

          {calendar.schedule && (
            <CourseCalendarSingle label="Lịch học" icon={Clock2}>
              {calendar.schedule}
            </CourseCalendarSingle>
          )}

          {calendar.location && (
            <CourseCalendarSingle label="Địa điểm" icon={MapPin}>
              <p>{calendar.location.name}</p>
              <p>{calendar.location.address}</p>
            </CourseCalendarSingle>
          )}

          {calendar.platform && (
            <CourseCalendarSingle label="Platform" icon={PictureInPicture2}>
              {calendar.platform}
            </CourseCalendarSingle>
          )}

          {calendar.tuition && (
            <CourseCalendarSingle label="Học phí" icon={DollarSign}>
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
            </CourseCalendarSingle>
          )}
        </div>
      )}

      {layout === "double" && (
        <div>
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => setDialogOpen(true)}
            asChild
          >
            <Link href={`/register?course=${slug}`}>Đăng ký</Link>
          </Button>
        </div>
      )}

      {/* have facilities? */}
      {/* {hasMaterials && (
        <div className="absolute top-4 right-4">
          <div className="group flex items-center px-4 text-xs bg-white text-primary rounded-xl max-w-[140px] w-full h-10">
            <div className="overflow-hidden transition-all max-w-0 group-hover:max-w-[100px]">
              <p className="mr-2 line-clamp-2">Phòng học có máy tính</p>
            </div>

            <div className="flex items-center shrink-0">
              <Monitor size={18} />
              <PcCase size={18} />
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default function CourseOpeningSchedules({
  calendars,
  slug,
}: {
  calendars?: ICalendar[];
  slug: string;
}) {
  if (!calendars || calendars.length === 0) return null;

  return (
    <section id="schedules">
      <CourseSectionHeading>Lịch khai giảng</CourseSectionHeading>
      <div
        className={cn(
          "grid gap-2",
          calendars.length === 1 ? "sm:grid-cols-1" : "sm:grid-cols-2"
        )}
      >
        {calendars.map((calendar) => (
          <CourseOpeningScheduleCard
            calendar={calendar}
            key={calendar.title}
            slug={slug}
            layout={calendars.length === 2 ? "double" : "single"}
          />
        ))}
      </div>
    </section>
  );
}
