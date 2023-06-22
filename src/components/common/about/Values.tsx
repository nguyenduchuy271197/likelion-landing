import { Montserrat } from "next/font/google";
import SectionHeading from "../home/SectionHeading";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["vietnamese"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const values: Value[] = [
  {
    title: "Loyalty",
    subtitle: "Trung thành",
  },
  {
    title: "integrity",
    subtitle: "chính trực",
  },
  {
    title: "kindness",
    subtitle: "tử tế",
  },
  {
    title: "enthusiasm",
    subtitle: "nhiệt huyết",
  },
  {
    title: "lion-heartedness",
    subtitle: "dũng cảm",
  },
  {
    title: "innovation",
    subtitle: "đổi mới",
  },
  {
    title: "ownership",
    subtitle: "làm chủ công việc",
  },
  {
    title: "nurturing",
    subtitle: "Nuôi dưỡng",
  },
];

interface Value {
  title: string;
  subtitle: string;
}

function ValueCard({ title, subtitle }: Value) {
  return (
    <div className="w-fit">
      <div>
        <div className="flex items-end gap-1 font-medium">
          <span
            className={cn(
              "pb-4 uppercase font-bold text-8xl text-[#ff7100]",
              montserrat.className
            )}
          >
            {title[0]}
          </span>
          <div className="flex flex-col">
            <span className="text-2xl text-[#ff7100] opacity-80">
              {title.slice(1)}
            </span>
            <span className="font-medium capitalize text-muted-foreground">
              {subtitle}
            </span>
          </div>
        </div>

        {/* <div className="grid grid-cols-2">
          <span
            className={cn(
              "uppercase font-bold text-8xl text-[#ff7100]",
              montserrat.className
            )}
          >
            {title[0]}
          </span>
          <span className="text-2xl text-[#ff7100] opacity-80 self-end">
            {title.slice(1)}
          </span>
          <span className="col-start-2 font-medium capitalize text-muted-foreground">
            {subtitle}
          </span>
        </div> */}
      </div>
    </div>
  );
}

export default function Values() {
  return (
    <section>
      <div className="container">
        <div className="py-20">
          <SectionHeading
            title="Giá trị"
            subtitle="Những giá trị cốt lõi định hình tư tưởng, văn hoá và chiến lược của LIKELION."
          />
          <div className="grid content-center grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-16">
            {values.map((value) => (
              <ValueCard {...value} key={value.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
