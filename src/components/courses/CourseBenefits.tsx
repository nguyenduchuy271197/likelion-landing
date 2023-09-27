import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface Benefit {
  title: string;
  description: string;
  src: string;
}

function CourseBenefit({ title, description, src }: Benefit) {
  return (
    <div className="max-w-xl p-8 sm:p-12 space-y-4 border rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-muted shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] mx-auto w-full">
      <div className="flex justify-start">
        <div className="flex items-center justify-center p-4 rounded-full bg-muted">
          <Image src={src} alt={title} width={36} height={36} />
        </div>
      </div>

      <h3 className="text-2xl font-bold sm:text-3xl">{title}</h3>
      <p className="text-lg sm:text-xl text-muted/80">{description}</p>
    </div>
  );
}

function CourseBenefitColumn({
  benefits,
  ...props
}: { benefits: Benefit[] } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-12", props.className)}>
      {benefits.map((benefit) => (
        <CourseBenefit key={benefit.title} {...benefit} />
      ))}
    </div>
  );
}

export default function CourseBenefits({ benefits }: { benefits: Benefit[] }) {
  return (
    <section id="benefits">
      <div className="max-w-screen-xl px-8 mx-auto">
        <div className="space-y-16">
          {/* <h2 className="text-3xl font-bold text-center sm:text-4xl">
            Lợi ích của học viên
          </h2> */}
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <CourseBenefitColumn benefits={benefits.slice(0, 3)} />
            <CourseBenefitColumn
              benefits={benefits.slice(3)}
              className="md:mt-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
