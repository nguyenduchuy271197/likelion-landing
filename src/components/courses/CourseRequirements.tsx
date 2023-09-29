import { Check, Plus } from "lucide-react";
import Image from "next/image";
import CourseSectionHeading from "./CourseSectionHeading";

function CourseRequirement({ name }: { name: string }) {
  return (
    <li className="flex items-center gap-4">
      <div className="flex items-center justify-center rounded-full w-7 h-7 shrink-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        <Plus className="w-4 h-4 text-muted" strokeWidth={3} />
      </div>
      {name}
    </li>
  );
}

export default function CourseRequirements({
  requirements,
}: {
  requirements: string[];
}) {
  if (!requirements) return null;

  return (
    <section>
      <div className="max-w-screen-lg px-8 mx-auto">
        <div className="flex items-center justify-between gap-8">
          <div className="space-y-8">
            <CourseSectionHeading>Yêu cầu cho khoá học</CourseSectionHeading>
            <ul className="flex flex-col gap-4 text-lg">
              {requirements.map((requirement) => (
                <CourseRequirement key={requirement} name={requirement} />
              ))}
            </ul>
          </div>
          <div className="hidden md:block">
            <div className="relative w-[300px] md:w-[450px] aspect-[4/3] rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
              <Image
                src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1695803265/courses/7753425_exrsvp.png"
                alt="Bạn sẽ học được gì?"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
