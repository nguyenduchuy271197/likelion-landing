import { ICourse } from "@/types";
import Image from "next/image";

interface LectureType {
  name: string;
  profession: string;
  description: string;
  avatar: string;
}

function CourseLecturerRow({ lecturer }: { lecturer: LectureType }) {
  return (
    <div className="grid sm:grid-cols-[100px_1fr] gap-2 sm:gap-8 bg-muted rounded-xl p-8 border">
      <div className="relative sm:w-full aspect-[1/1] w-20 mx-auto rounded-full bg-gradient-to-br from-[#FFE3CB] to-[#ff7100] overflow-hidden">
        <Image
          src={lecturer.avatar}
          fill
          alt={lecturer.name}
          className="object-contain"
        />
      </div>
      <div className="space-y-1 text-center sm:space-y-2 sm:text-left">
        <h3 className="text-lg font-medium uppercase">{lecturer.name}</h3>
        <div className="tracking-wider text-muted-foreground">
          {lecturer.profession}
        </div>
        <p className="text-sm leading-relaxed sm:text-base">
          {lecturer.description}
        </p>
      </div>
    </div>
  );
}

export default function CourseLecturers({
  lecturers,
}: {
  lecturers: ICourse["lecturers"];
}) {
  if (!lecturers || lecturers.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-medium">Đội ngũ hướng dẫn</h2>
      <div className="space-y-4">
        {lecturers.map((lecturer) => (
          <CourseLecturerRow key={lecturer.name} lecturer={lecturer} />
        ))}
      </div>
    </section>
  );
}
