import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { IModule } from "@/types";
import { FileText, GitFork } from "lucide-react";

function CourseModule({
  name,
  lessons,
  projects,
  index,
}: IModule & { index: number }) {
  return (
    <AccordionItem
      className="px-8 py-4 rounded-lg bg-[#6F4AFF] text-muted"
      value={name}
      key={name}
    >
      <AccordionTrigger className="gap-4 [&>svg]:shrink-0 text-left font-bold uppercase text-xl [&_svg]:w-8 [&_svg]:h-8">
        {index}. {name}
      </AccordionTrigger>
      <AccordionContent>
        <ul className="flex flex-col gap-4 py-2 text-xl">
          {lessons.map((lesson) => (
            <li className="flex items-center gap-4" key={lesson}>
              <FileText className="w-6 h-6 shrink-0" />
              {lesson}
            </li>
          ))}

          {projects &&
            projects?.map((project, i) => (
              <li className="flex items-center gap-4" key={project}>
                <GitFork className="w-6 h-6 shrink-0" />
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
      <div className="container">
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-center sm:text-5xl">
            Nội dung khoá học
          </h2>
          <Accordion
            type="multiple"
            // collapsible
            className="flex flex-col w-full gap-4"
            defaultValue={[modules[0].name]}
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
        </div>
      </div>
    </section>
  );
}
