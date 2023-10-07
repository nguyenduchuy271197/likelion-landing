import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface CourseCardProps {
  title: string;
  thumbnail_og: string;
  thumbnail: string;
  slug: string;
  tags: {
    schedules: string[];
    status: string[];
  };
  background: {
    from: string;
    to: string;
  };
}

export default function CourseCard({
  title,
  thumbnail_og,
  thumbnail,
  background,
  slug,
  tags,
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${slug}`}
      className="relative p-8 md:p-12 transition duration-300 border rounded-xl group text-muted min-h-[400px] sm:min-h-[450px]"
      style={{
        background: `linear-gradient(to right,  ${background.from} 0%,${background.to} 100%)`,
      }}
    >
      <div className="flex flex-col items-center gap-4 md:items-start">
        <div className="flex flex-col items-center gap-4 text-center md:text-left md:max-w-sm md:items-start">
          <h3 className="text-2xl font-bold capitalize transition sm:text-3xl lg:text-4xl">
            {title}
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-1 md:justify-start">
            {tags.schedules.map((tag) => (
              <Badge
                variant="outline"
                key={tag}
                className="pointer-events-none text-muted"
              >
                {tag}
              </Badge>
            ))}

            {tags.status.map((tag) => (
              <Badge
                variant="outline"
                key={tag}
                className="pointer-events-none text-muted"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <Link
          href={`/courses/${slug}`}
          className="inline-flex items-center gap-2 text-lg"
        >
          Xem khoá học
          <MoveRight className="transition group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="relative bottom-0 right-0 md:absolute max-w-[250px] aspect-[1/1] sm:w-[250px] lg:w-[300px] mx-auto w-full">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-contain opacity-80"
        />
      </div>
    </Link>
  );
}
