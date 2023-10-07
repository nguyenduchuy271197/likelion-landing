import { MoveRight, Plus } from "lucide-react";
import CourseSectionHeading from "./CourseSectionHeading";

function CourseRequirement({ name }: { name: string }) {
  return (
    <li className="flex items-center gap-4">
      <div className="flex items-center justify-center text-orange-500 bg-orange-100 rounded-full w-7 h-7 shrink-0">
        <MoveRight className="w-4 h-4" strokeWidth={3} />
      </div>
      {name}
    </li>
  );
}

export default function CourseRequirements({
  title,
  requirements,
}: {
  requirements: string[];
  title: string;
}) {
  if (!requirements) return null;

  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row">
          <CourseSectionHeading className="md:max-w-sm">
            Đến với {title}
          </CourseSectionHeading>
          <div>
            <ul className="flex flex-col gap-4 text-lg">
              {requirements.map((requirement) => (
                <CourseRequirement key={requirement} name={requirement} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
