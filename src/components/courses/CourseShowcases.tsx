import Image from "next/image";
import { Badge } from "../ui/Badge";
import CourseImageViewer from "./CourseImageViewer";
import CourseSectionHeading from "./CourseSectionHeading";

interface CourseShowcaseType {
  src: string;
  title: string;
  tags: string[];
}

function CourseShowcase({ src, title, tags }: CourseShowcaseType) {
  return (
    <div className="flex flex-col">
      <CourseImageViewer title={title} imageUrl={src}>
        <div className="relative aspect-[4/3] border rounded-xl overflow-hidden cursor-pointer">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover object-top duration-500 hover:transition-all lg:hover:object-bottom hover:duration-6000"
          />
        </div>
      </CourseImageViewer>

      <div className="flex flex-col gap-2 py-4">
        <h4 className="font-medium">{title}</h4>
        <div className="flex flex-wrap items-center gap-1">
          {tags.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CourseShowcases({
  showcases,
}: {
  showcases?: CourseShowcaseType[];
}) {
  if (!showcases || showcases.length === 0) return null;

  return (
    <section id="projects">
      <CourseSectionHeading>Dự án của học viên</CourseSectionHeading>
      <div className="grid gap-8 sm:grid-cols-2">
        {showcases.map((showcase) => (
          <CourseShowcase key={showcase.title} {...showcase} />
        ))}
      </div>
    </section>
  );
}
