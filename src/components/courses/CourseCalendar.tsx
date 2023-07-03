import { Calendar, Clock2, LucideIcon, MapPin, School } from "lucide-react";
import { ReactNode } from "react";

const calendar = {
  date: "Thứ 2, 4, 6 | 18:00 - 21:00",
  start: "02/08/2023",
  mode: "Offline",
  place: {
    name: "Viện Đổi mới Sáng tạo UEH (UII)",
    address: "232/6 Võ Thị Sáu, Quận 3",
  },
};

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
    <div className="flex flex-col items-start gap-2 sm:text-lg sm:flex-row">
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

export default function CourseCalendar() {
  return (
    <div className="px-4 py-6 sm:py-12 sm:px-8 rounded-xl text-muted bg-primary">
      <div className="flex flex-col gap-6 sm:text-lg">
        <CourseCalendarRow label="Lịch học" icon={Calendar}>
          {calendar.date}
        </CourseCalendarRow>
        <CourseCalendarRow label="Khai giảng" icon={Clock2}>
          {calendar.start}
        </CourseCalendarRow>
        <CourseCalendarRow label="Hình thức" icon={School}>
          {calendar.mode}
        </CourseCalendarRow>
        <CourseCalendarRow label="Địa điểm" icon={MapPin}>
          <div className="flex flex-col gap-2">
            <span>{calendar.place.name}</span>
            <span>{calendar.place.address}</span>
          </div>
        </CourseCalendarRow>
      </div>
    </div>
  );
}
