import { Check } from "lucide-react";
import CourseSectionHeading from "./CourseSectionHeading";

function ObjectivesItem({ name }: { name: string }) {
  return (
    <li className="flex gap-4">
      <Check className="mt-1 shrink-0" size={16} />
      {name}
    </li>
  );
}

export default function CourseObjectives({
  objectives,
}: {
  objectives: string[];
}) {
  return (
    <div className="p-8 rounded-2xl bg-muted">
      <CourseSectionHeading>Bạn sẽ học được gì?</CourseSectionHeading>
      <ul className="grid gap-4 text-sm md:gap-6 md:grid-cols-2 sm:text-base">
        {objectives.map((obj) => (
          <ObjectivesItem key={obj} name={obj} />
        ))}
      </ul>
    </div>
  );
}
