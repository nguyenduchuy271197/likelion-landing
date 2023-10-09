import Image from "next/image";
import CourseSectionHeading from "./CourseSectionHeading";

interface LectureType {
  name: string;
  profession: string;
  description: string;
  avatar: string;
}

function CourseLecturerRow({
  name,
  profession,
  description,
  avatar,
}: LectureType) {
  return (
    <div className="">
      <div className="flex flex-col items-center space-y-4 md:items-start">
        <div className="relative aspect-[1/1] w-28 bg-black overflow-hidden rounded-full bg-gradient-to-r from-[#FFAE6C] to-[#FF7100]">
          <Image src={avatar} fill alt={name} className="object-contain" />
        </div>

        <div className="space-y-1 text-center sm:space-y-2 md:text-left">
          <h3 className="text-2xl font-bold capitalize">{name}</h3>
          <div className="text-lg opacity-80">{profession}</div>
        </div>
        <div className="text-center md:text-left">
          <p className="text-xl font-medium leading-relaxed">
            <span className="text-2xl">“</span>
            {description}
            <span className="text-2xl">”</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CourseLecturers({
  lecturers,
}: {
  lecturers?: LectureType[];
}) {
  if (!lecturers || lecturers.length === 0) return null;
  return (
    <section className="bg-primary text-muted">
      <div className="container">
        <div className="flex flex-col gap-16 py-20 md:gap-8 md:flex-row">
          <div className="shrink-0">
            <div className="md:sticky top-[150px]">
              <CourseSectionHeading className="md:max-w-sm md:min-h-[400px]">
                Đội ngũ giảng viên tâm huyết, chuyên nghiệp
              </CourseSectionHeading>
            </div>
          </div>

          <div>
            <ul className="flex flex-col gap-16 text-lg">
              {lecturers.map((lecturer, index) => (
                <CourseLecturerRow key={index} {...lecturer} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
