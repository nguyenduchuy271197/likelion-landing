import { LucideProps } from "lucide-react";

interface CourseTechIconProps {
  icon?: (props: LucideProps) => JSX.Element;
}

export default function CourseTechIcon({ icon: Icon }: CourseTechIconProps) {
  if (!Icon) return null;

  return (
    <div className="flex items-center justify-center transition duration-500 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 h-[70px] w-[70px]">
      <Icon className="w-[40px] h-[40px] object-contain object-center" />
    </div>
  );
}
