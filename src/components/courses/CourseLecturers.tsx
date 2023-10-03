import Image from "next/image";
import CourseSectionHeading from "./CourseSectionHeading";

interface LectureType {
  name: string;
  profession: string;
  description: string;
  avatar: string;
}

function CourseLecturerRow({
  lecturer,
  background,
}: {
  lecturer: LectureType;
  background: {
    from: string;
    to: string;
  };
}) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center p-2 bg-white rounded-[30px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div
            className="relative aspect-[1/1] w-28 overflow-hidden rounded-[30px]"
            style={{
              background: `linear-gradient(to right,  ${background.from} 0%,${background.to} 100%)`,
            }}
          >
            <Image
              src={lecturer.avatar}
              fill
              alt={lecturer.name}
              className="object-contain"
            />
          </div>
        </div>

        <div className="space-y-1 text-center sm:space-y-2">
          <h3 className="text-2xl font-bold capitalize">{lecturer.name}</h3>
          <div className="text-lg text-foreground/60">
            {lecturer.profession}
          </div>
        </div>
        <div>
          <p className="text-xl font-medium leading-relaxed text-center">
            <span className="text-2xl">“</span>
            {lecturer.description}
            <span className="text-2xl">”</span>
          </p>
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
  background: {
    from: string;
    to: string;
  };
}

export default function CourseLecturers({
  lecturers,
  background,
}: CourseLecturersProps) {
  if (!lecturers || lecturers.length === 0) return null;

  return (
    <section id="lecturers">
      <div className="container">
        <div className="space-y-14 md:space-y-20">
          <CourseSectionHeading className="text-center">
            Đội ngũ hướng dẫn
          </CourseSectionHeading>
          <div className="space-y-16">
            {lecturers.map((lecturer) => (
              <CourseLecturerRow
                key={lecturer.name}
                lecturer={lecturer}
                background={background}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
