import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";
import { Badge } from "../ui/Badge";

interface CourseSectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  tags?: string[];
  children?: ReactNode;
}

export default function CourseSectionHeading({
  tags,
  className,
  children,
  ...props
}: CourseSectionHeadingProps) {
  return (
    <h2 className={cn("mb-6 text-2xl font-medium", className)} {...props}>
      {tags && tags.length > 0 ? (
        <>
          <span>{children}</span>
          <div className="flex items-center gap-1">
            {tags.map((tag) => (
              <Badge className="bg-[#FF7100] capitalize" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        </>
      ) : (
        <>{children}</>
      )}
    </h2>
  );
}
