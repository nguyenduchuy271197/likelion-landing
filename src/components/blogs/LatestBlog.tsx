import { formatDate } from "@/lib/date";
import { IBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LatestBlog({
  slug,
  excerpt,
  thumbnail,
  title,
  publishOn,
}: IBlog) {
  return (
    <div className="hidden mb-16 sm:block">
      <div className="container">
        <Link
          href={`/blogs/${slug}`}
          className="grid md:grid-cols-[3fr_2fr] gap-8 group"
        >
          <div className="overflow-hidden rounded-lg">
            <Image
              src={thumbnail || ""}
              alt={title}
              width={600}
              height={300}
              className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="py-2">
            <p className="mb-2 font-medium text-muted-foreground">
              {formatDate(publishOn)}
            </p>
            <h2 className="mb-4 text-2xl font-medium lg:text-3xl">{title}</h2>
            <p className="text-lg leading-relaxed lg:text-xl text-muted-foreground line-clamp-5">
              {excerpt}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
