import Image from "next/image";

interface CourseTechIconProps {
  title: string;
  src: string;
}

export default function CourseTechIcon({ title, src }: CourseTechIconProps) {
  if (!src) return null;

  return (
    <div className="flex items-center justify-center transition duration-500 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 h-[55px] aspect-[1/1] bg-muted">
      <div className="relative w-[35px] aspect-[1/1]">
        <Image
          src={src}
          alt={title}
          className="object-contain object-center"
          fill
        />
      </div>
    </div>
  );
}
