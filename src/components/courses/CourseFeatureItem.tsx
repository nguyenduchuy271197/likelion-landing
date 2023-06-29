import { Code, LucideIcon } from "lucide-react";

interface CourseFeatureItemProps {
  icon?: LucideIcon;
  name: string;
}

export default function CourseFeatureItem({
  icon: Icon = Code,
  name,
}: CourseFeatureItemProps) {
  return (
    <li className="flex items-center gap-4">
      <Icon size={16} />
      {name}
    </li>
  );
}
