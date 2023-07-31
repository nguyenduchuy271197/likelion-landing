import {
  Calendar,
  Clock2,
  DoorOpen,
  LucideIcon,
  MapPin,
  Monitor,
  PcCase,
} from "lucide-react";
import { ReactNode } from "react";

interface OpeningScheduleType {
  title: string;
  date: string;
  start: string;
  mode: string;
  place: {
    name: string;
    address: string;
  };
  hasMaterials: boolean;
}

const openingSchedules: OpeningScheduleType[] = [
  {
    title: "Bootcamp 5",
    date: "Thứ 2, 4, 6 | 18:00 - 21:00",
    start: "16/08/2023",
    mode: "5 tháng (Offline)",
    place: {
      name: "Viện Đổi mới Sáng tạo UEH (UII)",
      address: "232/6 Võ Thị Sáu, Quận 3",
    },
    hasMaterials: false,
  },
  {
    title: "Bootcamp 6",
    date: "Thứ 2 đến thứ 6 | 09:00 - 17:00",
    start: "05/09/2023",
    mode: "3 tháng (Offline)",
    place: {
      name: "BSSC",
      address: "135 Hai Bà Trưng, Q1,TP. HCM",
    },
    hasMaterials: true,
  },
];

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
  title,
  date,
  start,
  mode,
  place,
  hasMaterials,
}: OpeningScheduleType) {
  return (
    <div className="relative px-6 py-6 sm:py-8 sm:px-8 rounded-xl text-muted bg-primary">
      <h4 className="text-[#FFB37B] font-medium text-xl mb-4">{title}</h4>
      <div className="space-y-6">
        <CourseCalendarRow label="Khai giảng" icon={DoorOpen}>
          {start}
        </CourseCalendarRow>
        <CourseCalendarRow label="Lộ trình học" icon={Calendar}>
          {mode}
        </CourseCalendarRow>
        <CourseCalendarRow label="Lịch học" icon={Clock2}>
          {date}
        </CourseCalendarRow>
        <CourseCalendarRow label="Địa điểm" icon={MapPin}>
          <div className="">
            <p>{place.name}</p>
            <p>{place.address}</p>
          </div>
        </CourseCalendarRow>
      </div>

      {hasMaterials && (
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
      )}
    </div>
  );
}

export default function CourseOpeningSchedules() {
  return (
    <div className="mt-12">
      <h2 className="mb-6 text-2xl font-medium">Lịch khai giảng</h2>
      <div className="grid gap-2 sm:grid-cols-2">
        {openingSchedules.map((openingSchedule, i) => (
          <CourseOpeningScheduleCard key={i} {...openingSchedule} />
        ))}
      </div>
    </div>
  );
}
