import CountUp from "react-countup";
import { Code2, LucideIcon, Star, Users } from "lucide-react";
import AchievementsAnimated from "./AchievementsAnimated";

const achievements: Achievement[] = [
  {
    icon: Users,
    label: "Học viên",
    count: 24000,
    startCount: 22000,
    suffix: "+",
    duration: 3,
  },
  {
    icon: Code2,
    label: "Năm kinh nghiệm giáo dục",
    count: 10,
    startCount: 0,
    suffix: "",
    duration: 5,
  },
  {
    icon: Star,
    label: "Học viên hài lòng",
    count: 95,
    startCount: 50,
    suffix: "%",
    duration: 3,
  },
];

type Achievement = {
  count: number;
  startCount: number;
  label: string;
  icon: LucideIcon;
  suffix?: string;
  duration?: number;
};

function AchievementCard({
  count,
  label,
  icon: Icon,
  suffix,
  startCount = 0,
  duration = 5,
}: Achievement) {
  return (
    <div className="flex items-center w-full max-w-xs gap-4 md:text-center md:flex-col lg:flex-row lg:text-start">
      <div className="flex items-center justify-center w-[80px] aspect-[1/1] bg-[#fff3ea] rounded-full">
        <Icon stroke="#ff7100" size={32} />
      </div>

      <div className="flex flex-col gap-1">
        <CountUp
          start={startCount}
          end={count}
          duration={duration}
          suffix={suffix}
          className="text-3xl font-bold"
        />

        <h3 className="text-lg text-muted-foreground md:text-base">{label}</h3>
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section className="container py-20 bg-white border-b md:py-10 md:shadow-lg md:rounded-2xl md:border-none">
      <AchievementsAnimated>
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.label} {...achievement} />
        ))}
      </AchievementsAnimated>
    </section>
  );
}
