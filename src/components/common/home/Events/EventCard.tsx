import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/date";

interface EventProps {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  publishOn: number;
}

export default function EventCard({
  title,
  description,
  thumbnail,
  slug,
  publishOn,
}: EventProps) {
  return (
    <div className="flex flex-col h-full overflow-hidden border rounded-lg shadow-lg lg:flex-row">
      <div className="lg:grow">
        <div className="relative w-full h-full aspect-[7/3]">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      <div className="w-full h-full p-6 sm:p-8 grow lg:grow-0 lg:max-w-[350px]">
        <div className="flex flex-col justify-between h-full space-y-4 lg:justify-start">
          <div className="space-y-2">
            <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Calendar size={16} />
              <span>{formatDate(publishOn)}</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground line-clamp-5">
              {description}
            </p>
          </div>
          <Button asChild className="self-start w-full lg:w-auto" size="lg">
            <Link href={`/blogs/${slug}`}>Xem thêm</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
