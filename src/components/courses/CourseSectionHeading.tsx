import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface CourseSectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
}

export default function CourseSectionHeading({
  children,
  className,
  ...props
}: CourseSectionHeadingProps) {
  return (
    <h2 className={cn("mb-6 text-2xl font-medium", className)} {...props}>
      {children}
    </h2>
  );
}
