import { formatDate } from "@/lib/date";
import { IBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LatestBlog({
  slug,
  imageUrl,
  title,
  publishOn,
}: IBlog) {
  return (
    <div className="mb-16">
      <div className="container">
        <Link
          href={`/blogs/${slug}`}
          className="grid lg:grid-cols-[3fr_2fr] gap-8 group"
        >
          <div className="overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={title}
              width={600}
              height={300}
              className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
            />
          </div>
          <div className="py-2">
            <p className="mb-2 font-medium text-muted-foreground">
              {formatDate(publishOn)}
            </p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight scroll-m-20 lg:text-5xl">
              {title}
            </h2>
            <p className="text-xl leading-relaxed text-muted-foreground line-clamp-5">
              Becoming a full-stack developer requires a comprehensive
              understanding of various technologies and tools. A full-stack
              developer is proficient in both front-end and back-end
              development, making them versatile and capable of building
              complete web
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
