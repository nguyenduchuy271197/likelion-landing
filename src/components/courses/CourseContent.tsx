import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { IModule } from "@/types";
import { FileText } from "lucide-react";

function CourseModule({
  id,
  name,
  lessons,
  projects,
  index,
}: IModule & { index: number }) {
  return (
    <AccordionItem
      className="px-8 py-2 [&[data-state='open']]:bg-[#fafafa] border"
      value={name}
      key={id}
    >
      <AccordionTrigger className="gap-4 [&>svg]:shrink-0 text-left font-bold uppercase">
        {index}. {name}
      </AccordionTrigger>
      <AccordionContent>
        <ul className="flex flex-col gap-4 py-2 text-sm">
          {lessons.map((lesson) => (
            <li className="flex items-center gap-4" key={lesson}>
              <FileText size={16} />
              {lesson}
            </li>
          ))}

          {projects &&
            projects?.map((project, i) => (
              <li className="flex items-center gap-4" key={project}>
                <FileText size={16} />
                <span className="font-medium">
                  Project{projects.length > 1 && ` ${i + 1}`}:
                </span>
                {project}
              </li>
            ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}

export function CourseContent({ modules }: { modules: IModule[] }) {
  return (
    <div className="my-12">
      <h2 className="mb-6 text-2xl font-medium">Nội dung khoá học</h2>
      <Accordion type="single" collapsible className="w-full bg-white">
        {modules.map((module, i) => (
          <CourseModule
            id={module.id}
            name={module.name}
            lessons={module.lessons}
            key={module.id}
            index={i + 1}
            projects={module.projects}
          />
        ))}
      </Accordion>
    </div>
  );
}
