"use client";
import { useEffect, useState } from "react";

export interface INestedTocHeadings {
  id: string;
  title: string;
  items: {
    id: string;
    title: string;
  }[];
}

function getNestedHeadings(headingElements: HTMLHeadingElement[]) {
  const nestedHeadings: INestedTocHeadings[] = [];

  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      });
    }
  });

  return nestedHeadings;
}

export default function useTocHeadings() {
  const [nestedHeadings, setNestedHeadings] = useState<INestedTocHeadings[]>(
    []
  );

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("h2, h3")
    );

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
}
