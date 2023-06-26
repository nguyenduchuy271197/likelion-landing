import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  color?: "white" | "black";
}

export default function SectionHeading({
  title,
  subtitle,
  color = "black",
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-md mx-auto mb-16 text-center lg:max-w-2xl",
        color === "white" ? "text-white" : "text-black",
        props.className
      )}
    >
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 md:mt-6 lg:text-xl text-muted-foreground",
            color === "white" ? "text-white" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
