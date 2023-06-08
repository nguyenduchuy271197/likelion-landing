"use client";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import useTocHeadings, { INestedTocHeadings } from "@/hooks/useTocHeadings";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Headings = ({
  headings,
  activeId,
}: {
  headings: INestedTocHeadings[];
  activeId?: string;
}) => {
  return (
    <ul className="text-sm text-muted-foreground">
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            className={cn("mt-3", {
              "font-medium text-red-400": activeId === heading.id,
            })}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(`${heading.id}`)?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {heading.title}
          </a>
          {heading.items.length > 0 && (
            <ul>
              {heading.items.map((child) => (
                <li key={child.id}>
                  <a
                    href={`#${child.id}`}
                    className={cn("mt-2 ml-4", {
                      "font-medium text-red-400": activeId === child.id,
                    })}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(`${child.id}`)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {child.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
export default function TableOfContent() {
  const [activeId, setActiveId] = useState<string>();
  const { nestedHeadings } = useTocHeadings();
  useIntersectionObserver(setActiveId);

  return (
    <div aria-label="Table of content">
      <h4 className="mb-4 font-medium tracking-widest uppercase">
        Table of Contents
      </h4>
      <Headings headings={nestedHeadings} activeId={activeId} />
    </div>
  );
}
