import { ICourse } from "@/types";
import { Badge } from "../ui/Badge";

export default function CourseHeading({
  title,
  subtitle,
  tags,
}: {
  title: string;
  subtitle: string;
  tags: ICourse["tags"];
}) {
  if (!tags) return null;

  return (
    <div className="max-w-xl mx-auto mb-12 space-y-4 text-center lg:text-left lg:max-w-none">
      <div className="space-y-2">
        <ul className="flex items-center gap-1">
          {tags.status.map((s) => (
            <li key={s}>
              <Badge size="lg">{s}</Badge>
            </li>
          ))}
        </ul>
        <h1 className="mb-4 text-2xl font-bold capitalize sm:text-3xl lg:text-4xl">
          {title}
        </h1>
      </div>

      <p>{subtitle}</p>
    </div>
  );
}
