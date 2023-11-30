"use client";

import { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useFixedButtonStore from "./hooks/useFixedButton";

export default function ButtonWrapper({ children }: { children: ReactNode }) {
  const { hidden, show } = useFixedButtonStore();
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      hidden();
    } else {
      show();
    }
  }, [inView, hidden, show]);

  return <div ref={ref}>{children}</div>;
}
