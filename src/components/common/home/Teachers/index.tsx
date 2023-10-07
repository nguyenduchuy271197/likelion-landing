import Image from "next/image";
import SectionHeading from "../SectionHeading";
import data from "@/data/data.json";

interface TeacherPortfolioProps {
  name: string;
  profession: string;
  description: string;
  avatar: string;
}

function TeacherPortfolio({
  name,
  profession,
  description,
  avatar,
}: TeacherPortfolioProps) {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center p-2 bg-white rounded-[30px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="relative aspect-[1/1] w-28 bg-black overflow-hidden rounded-[30px] bg-gradient-to-r from-rose-400 to-orange-300">
            <Image src={avatar} fill alt={name} className="object-contain" />
          </div>
        </div>

        <div className="space-y-1 text-center sm:space-y-2">
          <h3 className="text-2xl font-bold capitalize">{name}</h3>
          <div className="text-lg text-foreground/60">{profession}</div>
        </div>
      </div>
    </div>
  );
}

export default function Teachers() {
  const teachers = data["lecturers"];
  return (
    <section>
      <div className="max-w-screen-lg px-8 mx-auto">
        <div className="space-y-8 sm:space-y-16">
          <SectionHeading
            title="Đội ngũ giảng viên"
            subtitle="Giảng dạy bằng sự đam mê cống hiến cho nền giáo dục IT ở Việt Nam, mong muốn giúp học viên chinh phục lập trình thành công."
          />

          <div className="flex flex-wrap items-center justify-center gap-12">
            {teachers.map((teacher) => (
              <TeacherPortfolio key={teacher.avatar} {...teacher} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
