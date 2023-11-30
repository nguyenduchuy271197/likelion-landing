import { ReactNode } from "react";

export default function Heading({ children }: { children?: ReactNode }) {
  return (
    <h2 className="text-4xl font-bold text-center uppercase text-[#F98130]">
      {children}
    </h2>
  );
}
