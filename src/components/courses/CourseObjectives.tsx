import { Check } from "lucide-react";

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
      <h2 className="mb-6 text-2xl font-medium">Bạn sẽ học được gì?</h2>
      <ul className="grid gap-4 text-sm md:gap-6 md:grid-cols-2 sm:text-base">
        {objectives.map((obj) => (
          <ObjectivesItem key={obj} name={obj} />
        ))}
      </ul>
    </div>
  );
}
