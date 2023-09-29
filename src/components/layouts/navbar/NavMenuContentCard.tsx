import { ReactNode } from "react";

interface NavMenuContentCardProps {
  children?: ReactNode;
}

export default function NavMenuContentCard({
  children,
}: NavMenuContentCardProps) {
  return (
    <ul className="grid w-[400px] gap-3 p-4 md:w-[700px] md:grid-cols-[250px_1fr] lg:w-[900px] ">
      {children}
    </ul>
  );
}
