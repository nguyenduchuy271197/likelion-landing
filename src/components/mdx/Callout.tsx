import { Lightbulb, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export default function Callout({
  children,
}: {
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4 p-6 border-l-4 rounded-md sm:p-8 bg-slate-100">
      <Lightbulb className="w-6 h-6 shrink-0" />
      <div className="font-medium">{children}</div>
    </div>
  );
}
