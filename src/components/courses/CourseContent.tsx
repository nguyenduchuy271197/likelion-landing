import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { IModule } from "@/types";
import { FileText, GitFork } from "lucide-react";
import CourseSectionHeading from "./CourseSectionHeading";

function CourseModule({
  name,
  lessons,
  projects,
  index,
}: IModule & { index: number }) {
  return (
    <AccordionItem
      className="px-8 py-2 [&[data-state='open']]:bg-[#fafafa] border"
      value={name}
      key={name}
    >
      <AccordionTrigger className="gap-4 [&>svg]:shrink-0 text-left font-bold uppercase">
        {index}. {name}
      </AccordionTrigger>
      <AccordionContent>
        <ul className="flex flex-col gap-4 py-2 text-base">
          {lessons.map((lesson) => (
            <li className="flex items-center gap-4" key={lesson}>
              <FileText size={16} className="shrink-0" />
              {lesson}
            </li>
          ))}

          {projects &&
            projects?.map((project, i) => (
              <li className="flex items-center gap-4" key={project}>
                <GitFork size={16} className="shrink-0" />
                <p>
                  <span className="font-medium">
                    Project{projects.length > 1 && ` ${i + 1}`}:
                  </span>{" "}
                  <span>{project}</span>
                </p>
              </li>
            ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}

export default function CourseContent({ modules }: { modules: IModule[] }) {
  return (
    <section id="content">
      <CourseSectionHeading>Nội dung khoá học</CourseSectionHeading>
      <Accordion
        type="single"
        collapsible
        className="w-full bg-white"
        defaultValue={modules[0].name}
      >
        {modules.map((module, i) => (
          <CourseModule
            name={module.name}
            lessons={module.lessons}
            key={module.name}
            index={i + 1}
            projects={module.projects}
          />
        ))}
      </Accordion>
    </section>
  );
}
