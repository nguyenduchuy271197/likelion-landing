import Image from "next/image";
import CourseSectionHeading from "./CourseSectionHeading";

interface LectureType {
  name: string;
  profession: string;
  description: string;
  avatar: string;
}

function CourseLecturerRow({ lecturer }: { lecturer: LectureType }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-8 md:items-start">
        <div className="flex items-center justify-center p-2 bg-white rounded-[30px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="relative aspect-[1/1] w-28 overflow-hidden rounded-[30px] bg-orange-400">
            <Image
              src={lecturer.avatar}
              fill
              alt={lecturer.name}
              className="object-contain"
            />
          </div>
        </div>

        <div className="space-y-4 text-center md:text-left">
          <div className="space-y-1 sm:space-y-2">
            <h3 className="text-2xl font-bold capitalize">{lecturer.name}</h3>
            <div className="text-lg opacity-70">{lecturer.profession}</div>
          </div>
          <div>
            <p className="text-xl font-medium leading-relaxed">
              <span className="text-2xl">“</span>
              {lecturer.description}
              <span className="text-2xl">”</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CourseLecturersProps {
  lecturers: {
    name: string;
    profession: string;
    avatar: string;
    description: string;
  }[];
}

export default function CourseLecturers({ lecturers }: CourseLecturersProps) {
  if (!lecturers || lecturers.length === 0) return null;

  return (
    <section id="lecturers" className="bg-foreground text-background">
      <div className="container">
        <div className="grid gap-8 py-20 md:grid-cols-2">
          <CourseSectionHeading className="text-center md:max-w-sm md:text-left">
            Đội ngũ giảng viên chuyên nghiệp, tâm huyết
          </CourseSectionHeading>
          <div className="space-y-16">
            {lecturers.map((lecturer) => (
              <CourseLecturerRow key={lecturer.name} lecturer={lecturer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
