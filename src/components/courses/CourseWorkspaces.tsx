import Image from "next/image";
import { workspaceOptions } from "../common/home/Workspaces/workspaces";

export default function CourseWorkspaces() {
  return (
    <section className="bg-primary">
      <div className="max-w-screen-xl px-8 mx-auto">
        <div className="py-28">
          <h2 className="mb-20 text-3xl font-bold text-center sm:text-4xl text-primary-foreground">
            Học viên LIKELION làm việc ở đâu?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10">
            {workspaceOptions.map((ws) => (
              <div key={ws.title} className="relative w-[180px] aspect-[2/1]">
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
