import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

interface CourseCardProps {
  title: string;
  thumbnail: string;
  slug: string;
  tags: {
    schedules: string[];
    status: string[];
  };
}

export default function CourseCard({
  title,
  thumbnail,
  slug,
  tags,
}: CourseCardProps) {
  return (
    <div className="flex flex-col overflow-hidden transition duration-300 group hover:-translate-y-2">
      <Link
        href={`/courses/${slug}`}
        className="relative overflow-hidden aspect-[4/3] rounded-2xl hover:shadow "
      >
        <Image
          src={thumbnail}
          alt={title}
          width={400}
          height={200}
          className="object-cover object-center w-full h-full transition duration-300"
        />

        <div className="absolute top-0 left-0 w-full h-full transition opacity-0 bg-black/50 z-[1] group-hover:opacity-100 duration-300"></div>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2  top-1/2 group-hover:opacity-100 z-[2] opacity-0 transition duration-300">
          <Button variant="secondary">Xem khoá học</Button>
        </div>
      </Link>
      <div className="pt-4 grow">
        <Link
          href={`/courses/${slug}`}
          className="mb-2 text-xl font-semibold capitalize transition"
        >
          {title}
        </Link>

        <div className="flex flex-wrap items-center gap-1">
          {tags.schedules.map((tag) => (
            <Badge variant="outline" key={tag} className="pointer-events-none">
              {tag}
            </Badge>
          ))}

          {tags.status.map((tag) => (
            <Badge variant="outline" key={tag} className="pointer-events-none">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
