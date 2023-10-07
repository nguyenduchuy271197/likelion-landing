import { IModule } from "@/types";
import { ArrowDownRight, FileText, GitFork } from "lucide-react";
import CourseSectionHeading from "./CourseSectionHeading";

interface CourseModuleProps extends IModule {
  index: number;
}

function CourseModule({ name, lessons, projects, index }: CourseModuleProps) {
  return (
    <li className="grid gap-8 py-12 border-b-2 sm:py-16 border-orange-500/40 md:grid-cols-2">
      <div>
        <div className="flex items-center gap-4 sm:gap-8 md:max-w-sm">
          <p className="text-3xl font-bold sm:text-6xl text-orange-500/50">
            {index + 1 >= 10 ? index + 1 : `0${index + 1}`}
          </p>
          <h3 className="text-2xl font-bold text-orange-500 sm:text-3xl">
            {name}
          </h3>
        </div>
      </div>

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
              <li className="flex items-center gap-4 font-bold" key={project}>
                <GitFork className="w-6 h-6 shrink-0" />
                <p>
                  <span>Project{projects.length > 1 && ` ${i + 1}`}:</span>{" "}
                  <span>{project}</span>
                </p>
              </li>
            ))}
        </ul>
      </div>
    </li>
  );
}

function CourseFeature({ name }: { name: string }) {
  return (
    <li className="flex items-center gap-4">
      <ArrowDownRight className="w-5 h-5 shrink-0" strokeWidth={3} />
      {name}
    </li>
  );
}

export default function CourseContent({
  modules,
  features,
}: {
  modules: IModule[];
  features?: string[];
}) {
  return (
    <section id="content">
      <div className="bg-orange-500 text-muted">
        <div className="container">
          <div className="grid gap-8 py-20 md:grid-cols-2">
            <CourseSectionHeading className="md:max-w-sm">
              Nội dung khoá học
            </CourseSectionHeading>
            <div>
              {features && (
                <ul className="flex flex-col gap-4 text-lg font-medium">
                  {features.map((feature) => (
                    <CourseFeature key={feature} name={feature} />
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
                <CourseModule key={module.name} {...module} index={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
