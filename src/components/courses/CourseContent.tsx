import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { IModule } from "@/types";
import { ArrowDownRight, FileText, GitFork } from "lucide-react";
import CourseSectionHeading from "./CourseSectionHeading";

interface CourseModuleProps extends IModule {
  index: number;
  background: {
    from: string;
    to: string;
  };
}

function CourseModule({
  name,
  lessons,
  projects,
  index,
  background,
}: CourseModuleProps) {
  return (
    <li
      className="grid gap-8 py-16 border-b md:grid-cols-2"
      style={{
        borderColor: background.from,
      }}
    >
      <h3
        className="text-3xl font-bold sm:text-4xl md:max-w-sm"
        style={{
          color: background.to,
        }}
      >
        {index}. {name}
      </h3>
      <div>
        <ul className="flex flex-col gap-4 text-lg">
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
      </div>
    </li>
  );
}

function CourseHighlight({ name }: { name: string }) {
  return (
    <li className="flex items-center gap-4">
      <ArrowDownRight className="w-5 h-5 shrink-0" />
      {name}
    </li>
  );
}

export default function CourseContent({
  modules,
  highlights,
  background,
}: {
  modules: IModule[];
  highlights?: string[];
  background: {
    from: string;
    to: string;
  };
}) {
  return (
    <section id="content">
      <div
        className="text-muted"
        style={{
          background: `linear-gradient(to right,  ${background.from} 0%,${background.to} 100%)`,
        }}
      >
        <div className="container">
          <div className="grid gap-8 py-20 md:grid-cols-2">
            <CourseSectionHeading className="md:max-w-sm">
              Nội dung khoá học
            </CourseSectionHeading>
            <div>
              {highlights && (
                <ul className="flex flex-col gap-4 text-lg">
                  {highlights.map((requirement) => (
                    <CourseHighlight key={requirement} name={requirement} />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div>
            <ul>
              {modules.map((module, index) => (
                <CourseModule
                  key={module.name}
                  {...module}
                  index={index}
                  background={background}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
