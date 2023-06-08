import { Icon } from "lucide-react";
import { ReactNode } from "react";

interface CourseFeatureItemProps {
  icon: Icon;
  name: string;
}

export default function CourseFeatureItem({
  icon: Icon,
  name,
}: CourseFeatureItemProps) {
  return (
    <li className="flex items-center gap-4">
      <Icon size={16} />
      {name}
    </li>
  );
}
