import { ICourse } from "@/types";
import { Badge } from "../ui/Badge";
import { Check } from "lucide-react";

export default function CourseHeading({
  title,
  subtitle,
  tags,
  highlights,
}: {
  title: string;
  subtitle: string;
  tags: ICourse["tags"];
  highlights: ICourse["highlights"];
}) {
  if (!tags) return null;

  return (
    <section className="py-16 text-muted bg-gradient-to-r to-[#FFA563] from-[#ff7711]">
      <div className="container">
        <div className="max-w-xl mx-auto space-y-4 text-center lg:text-left lg:max-w-none lg:mr-[350px]">
          <div className="space-y-2">
            <ul className="flex items-center justify-center gap-1 lg:justify-start">
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

          <p className="text-lg">{subtitle}</p>

          {highlights.length > 0 && (
            <ul className="max-w-xs mx-auto space-y-2 lg:mx-0 lg:max-w-none">
              {highlights.map((highlight) => (
                <li
                  className="flex items-center gap-4 text-lg font-medium"
                  key={highlight}
                >
                  <div className="p-1 rounded-full bg-muted">
                    <Check stroke="#ff7700" size={16} strokeWidth={3} />
                  </div>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
