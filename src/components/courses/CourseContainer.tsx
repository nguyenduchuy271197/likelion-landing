import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface CourseContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function CourseContainer({
  className,
  children,
  ...props
}: CourseContainerProps) {
  return (
    <div className={cn("lg:mr-[350px]", className)} {...props}>
      {children}
    </div>
  );
}
