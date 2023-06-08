import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Daum, Daum2 } from "@/services/courseService";
import { FileText } from "lucide-react";

function CourseModule({
  name,
  lessons,
  index,
}: {
  name: string;
  lessons: Daum2[];
  index: number;
}) {
  return (
    <AccordionItem
      className="px-8 py-2 [&[data-state='open']]:bg-[#fafafa] border"
      value={name}
    >
      <AccordionTrigger className="gap-4 [&>svg]:shrink-0 text-left font-bold uppercase">
        {index}. {name}
      </AccordionTrigger>
      <AccordionContent>
        <ul className="flex flex-col gap-4 py-2 text-sm">
          {lessons.map((lesson) => (
            <li
              className="flex items-center gap-4"
              key={lesson.attributes.name}
            >
              <FileText size={16} />
              {lesson.attributes.name}
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}

export function CourseContent({ modules }: { modules: Daum[] }) {
  return (
    <div className="my-12">
      <h2 className="mb-6 text-2xl font-medium tracking-tight scroll-m-20">
        Nội dung khoá học
      </h2>
      <Accordion type="single" collapsible className="w-full bg-white">
        {modules.map((module, i) => (
          <CourseModule
            name={module.attributes.name}
            lessons={module.attributes.lessons.data}
            key={module.attributes.name}
            index={i + 1}
          />
        ))}
      </Accordion>
    </div>
  );
}
