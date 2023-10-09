import Image from "next/image";
import { workspaceOptions } from "../common/home/Workspaces/workspaces";
import CourseSectionHeading from "./CourseSectionHeading";

export default function CourseWorkspaces() {
  return (
    <section className="bg-[#1b1e29]">
      <div className="max-w-screen-xl px-8 mx-auto">
        <div className="space-y-16 py-14 sm:py-20">
          <CourseSectionHeading className="text-center text-primary-foreground">
            Học viên LIKELION làm việc ở đâu?
          </CourseSectionHeading>
          <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10">
            {workspaceOptions.map((ws) => (
              <div key={ws.title} className="relative w-[150px] aspect-[2/1]">
                <Image
                  src={ws.src}
                  alt={ws.title}
                  className="object-contain brightness-0 invert opacity-70"
                  fill
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
