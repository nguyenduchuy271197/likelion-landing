import Icons from "@/components/Icons";
import { TestimonialType } from ".";
import Image from "next/image";

export default function TestimonialCard({
  saying,
  name,
  avatar,
  course,
}: TestimonialType) {
  return (
    <div className="relative flex flex-col justify-center h-full p-4 rounded-lg shadow-lg sm:p-8">
      <Icons.quote className="absolute w-28 right-6 top-4 -z-10" />

      <div className="grow">
        <blockquote className="pl-4 mt-6 italic border-[#FFE3CB] border-l-2">
          &quot;{saying}&quot;
        </blockquote>
      </div>

      <div className="flex items-center gap-2">
        <div className="p-1 rounded-full shadow-lg">
          <div className="relative h-[60px] aspect-[1/1] bg-gradient-to-br from-[#FFE3CB] to-[#ff7100] rounded-full overflow-hidden shrink-0 ">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-muted-foreground">{course}</p>
        </div>
      </div>
    </div>
  );
}
