import { MoveRight, Plus } from "lucide-react";
import CourseSectionHeading from "./CourseSectionHeading";

function CourseRequirement({
  name,
  background,
}: {
  name: string;
  background: {
    from: string;
    to: string;
  };
}) {
  return (
    <li className="flex items-center gap-4">
      <div
        className="flex items-center justify-center rounded-full w-7 h-7 shrink-0"
        style={{
          backgroundColor: background.from,
          color: background.to,
        }}
      >
        <MoveRight className="w-4 h-4" strokeWidth={3} />
      </div>
      {name}
    </li>
  );
}

export default function CourseRequirements({
  requirements,
  background,
}: {
  requirements: string[];
  background: {
    from: string;
    to: string;
  };
}) {
  if (!requirements) return null;

  return (
    <section>
      <div className="max-w-screen-lg px-8 mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          <CourseSectionHeading className="md:max-w-sm">
            Đến với khóa học Python cho Data Analysis
          </CourseSectionHeading>
          <div>
            <ul className="flex flex-col gap-4 text-lg">
              {requirements.map((requirement) => (
                <CourseRequirement
                  key={requirement}
                  name={requirement}
                  background={background}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
