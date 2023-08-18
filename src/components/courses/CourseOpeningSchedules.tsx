import { cn } from "@/lib/utils";
import { ICalendar } from "@/types";
import { Calendar, Clock2, DoorOpen, LucideIcon, MapPin } from "lucide-react";
import { ReactNode } from "react";

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

function CourseOpeningScheduleCard({ calendar }: { calendar: ICalendar }) {
  return (
    <div className="relative px-6 py-6 sm:py-8 sm:px-8 rounded-xl text-muted bg-primary">
      <h4 className="text-[#FFB37B] font-medium text-xl mb-4">
        {calendar.title}
      </h4>
      <div className="space-y-6">
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
            {calendar.location}
          </CourseCalendarRow>
        )}

        {calendar.tuition && (
          <CourseCalendarRow label="Học phí" icon={MapPin}>
            {calendar.tuition.total}/ khoá hoặc {calendar.tuition.monthly}/
            tháng
          </CourseCalendarRow>
        )}
      </div>

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
}: {
  calendars: ICalendar[];
}) {
  if (calendars.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="mb-6 text-2xl font-medium">Lịch khai giảng</h2>
      <div
        className={cn(
          "grid gap-2",
          calendars.length === 1 ? "sm:grid-cols-1" : "sm:grid-cols-2"
        )}
      >
        {calendars.map((calendar) => (
          <CourseOpeningScheduleCard calendar={calendar} key={calendar.title} />
        ))}
      </div>
    </div>
  );
}
