import { ReactNode } from "react";

interface NavMenuContentCardProps {
  children?: ReactNode;
}

export default function NavMenuContentCard({
  children,
}: NavMenuContentCardProps) {
  return (
    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
      {children}
    </ul>
  );
}
