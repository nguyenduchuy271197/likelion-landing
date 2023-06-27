import { Calendar, Clock2, MapPin, School } from "lucide-react";

const calendar = {
  date: "Thứ 2, 4, 6 | 18:00 - 21:00",
  start: "02/08/2023",
  mode: "Offline",
  place: {
    name: "Viện Đổi mới Sáng tạo UEH (UII)",
    address: "232/6 Võ Thị Sáu, Võ Thị Sáu, Quận 3",
  },
};

export default function CourseCalendar() {
  return (
    <div className="px-8 py-12 rounded-xl text-muted bg-primary">
      <div className="flex flex-col gap-6">
        {/* Date */}
        <div className="flex items-start text-lg">
          <div className="flex items-center">
            <span className="min-w-[40px]">
              <Calendar />
            </span>
          </div>

          <span className="min-w-[120px] font-medium">Lịch học</span>
          <span>{calendar.date}</span>
        </div>

        {/* Start */}
        <div className="flex items-start text-lg">
          <div className="flex items-center">
            <span className="min-w-[40px]">
              <Clock2 />
            </span>
          </div>

          <span className="min-w-[120px] font-medium">Khai giảng</span>
          <span>{calendar.start}</span>
        </div>

        {/* Mode */}
        <div className="flex items-start text-lg">
          <div className="flex items-center">
            <span className="min-w-[40px]">
              <School />
            </span>
          </div>

          <span className="min-w-[120px] font-medium">Hình thức</span>
          <span>{calendar.mode}</span>
        </div>

        {/* Date */}
        <div className="flex items-start text-lg">
          <div className="flex items-center">
            <span className="min-w-[40px]">
              <MapPin />
            </span>
          </div>

          <span className="min-w-[120px] font-medium">Địa điểm</span>
          <div className="flex flex-col gap-2">
            <span>{calendar.place.name}</span>
            <span>{calendar.place.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
