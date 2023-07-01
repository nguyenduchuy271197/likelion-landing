import Image from "next/image";
import { Badge } from "../ui/Badge";
import CourseImageViewer from "./CourseImageViewer";

interface CourseProjectType {
  src: string;
  title: string;
  tags: string[];
}

const projects = [
  {
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688188472/courses/bootcamp-lap-trinh-web-fullstack/projects/dwelling.png",
    title: "Dwelling - Apartment Rental Company Website",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688188469/courses/bootcamp-lap-trinh-web-fullstack/projects/portfolio.png",
    title: "John Doe - Artist Portfolio Website",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688188468/courses/bootcamp-lap-trinh-web-fullstack/projects/phloko.png",
    title: "Floko - Design Agency Website",
    tags: ["JavaScript", "ReactJS", "Tailwind CSS"],
  },
  {
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688188472/courses/bootcamp-lap-trinh-web-fullstack/projects/travel.png",
    title: "TrapTip - Traveling Agency Website",
    tags: ["JavaScript", "ReactJS", "Tailwind CSS"],
  },
  {
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688188468/courses/bootcamp-lap-trinh-web-fullstack/projects/florist.png",
    title: "Florist - Flower Shop Website",
    tags: ["JavaScript", "ReactJS", "Supabase", "PostgreSQL"],
  },
  {
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688188468/courses/bootcamp-lap-trinh-web-fullstack/projects/greeny.png",
    title: "Greenery - Fruit eCommerce Website",
    tags: ["JavaScript", "ReactJS", "NodeJS", "MongoDB"],
  },
];

function CourseProject({ src, title, tags }: CourseProjectType) {
  return (
    <div className="flex flex-col">
      <CourseImageViewer title={title} imageUrl={src}>
        <div className="relative aspect-[4/3] border rounded-xl overflow-hidden">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover object-top duration-500 hover:transition-all hover:object-bottom hover:duration-6000"
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

export default function CourseProjects() {
  return (
    <div className="mt-12">
      <h2 className="mb-6 text-2xl font-medium">Dự án của học viên</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <CourseProject key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
