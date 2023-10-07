import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/date";
import { IBlog } from "@/types";

export default function EventCard({
  title,
  excerpt,
  thumbnail,
  slug,
  publishOn,
}: IBlog) {
  return (
    <Link href={`/blogs/${slug}`} className="flex flex-col group">
      <div className="relative aspect-[7/5]">
        <Image
          src={thumbnail || ""}
          alt={title}
          className="object-cover transition duration-300 rounded-lg group-hover:scale-105"
          fill
        />
      </div>
      <div className="py-6">
        <p className="mb-2 text-sm text-muted-foreground">
          {formatDate(publishOn)}
        </p>
        <h2 className="mb-2 text-xl font-medium lg:text-xl line-clamp-1">
          {title}
        </h2>
        <p className="leading-relaxed text-muted-foreground line-clamp-3">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}
