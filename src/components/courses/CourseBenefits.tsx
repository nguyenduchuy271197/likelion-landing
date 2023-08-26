import { cn } from "@/lib/utils";
import { ICourse } from "@/types";
import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";
import CourseSectionHeading from "./CourseSectionHeading";

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

const benefitVariants = cva(
  "text-white p-8 from-[#FF7711] to-[#FFA563] rounded-2xl sm:rounded-lg",
  {
    variants: {
      index: {
        0: "bg-gradient-to-tl sm:rounded-tl-[3rem]",
        1: "bg-gradient-to-tr sm:rounded-tr-[3rem]",
        2: "bg-gradient-to-bl sm:rounded-bl-[3rem]",
        3: "bg-gradient-to-br sm:rounded-br-[3rem]",
      },
    },
    defaultVariants: {
      index: 0,
    },
  }
);

export interface BenefitProps
  extends Benefit,
    VariantProps<typeof benefitVariants> {}

function CourseBenefit({ title, description, icon, index = 0 }: BenefitProps) {
  if (index === undefined || index === null) return null;

  return (
    <div className={benefitVariants({ index })}>
      <div
        className={cn(
          "flex flex-col max-w-xs gap-4 h-full justify-between mx-auto sm:mx-0 text-center sm:text-left",
          [0, 2].includes(index)
            ? "sm:mr-auto  sm:text-left"
            : "sm:ml-auto sm:text-right",
          [0, 1].includes(index) ? "sm:flex-col" : "sm:flex-col-reverse"
        )}
      >
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <p>{description}</p>
        </div>
        <div className="relative aspect-[16/9]">
          <Image
            src={`data:image/svg+xml;utf8,${encodeURIComponent(icon)}`}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default function CourseBenefits({
  benefits,
}: {
  benefits: ICourse["benefits"];
}) {
  if (!benefits || benefits.length !== 4) return null;

  return (
    <section>
      <CourseSectionHeading className="sm:hidden">
        Lợi ích của học viên
      </CourseSectionHeading>

      <div className="relative">
        <div className="grid gap-4 sm:grid-cols-2 auto-rows-fr">
          {benefits.map((benefit, index) => {
            if (index === 0 || index === 1 || index === 2 || index === 3)
              return (
                <CourseBenefit key={benefit.title} index={index} {...benefit} />
              );
          })}
        </div>
        <div className="hidden sm:flex absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 aspect-[1/1] bg-muted rounded-full items-center justify-center text-center p-4 w-40">
          <h2 className="text-xl font-bold text-[#ff7700] uppercase">
            Lợi ích của học viên
          </h2>
        </div>
      </div>
    </section>
  );
}
