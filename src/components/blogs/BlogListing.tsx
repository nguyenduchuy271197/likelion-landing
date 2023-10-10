"use client";

import { formatDate } from "@/lib/date";
import { IBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePagination } from "@mantine/hooks";
import { Pagination } from "../ui/Pagination";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function BlogCard({
  slug,
  title,
  excerpt,
  thumbnail,
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

const PER_PAGE = 6;

export default function BlogListing({
  heading,
  blogs,
}: {
  heading: string;
  blogs: IBlog[];
}) {
  const searchParams = useSearchParams();

  const pagination = usePagination({
    total: Math.ceil(blogs.length / PER_PAGE),
    initialPage: Number(searchParams.get("page")) || 1,
  });

  useEffect(() => {
    pagination.setPage(Number(searchParams.get("page")) || 1);
  }, [searchParams, pagination]);

  return (
    <div className="md:mt-16">
      <div className="container">
        <div className="space-y-12">
          <div className="flex gap-2">
            <h2 className="text-2xl font-medium shrink-0 sm:text-3xl">
              {heading}
            </h2>
            <span className="w-full border-b-4 border-orange-200 grow"></span>
          </div>
          <div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogs
                .slice(
                  (pagination.active - 1) * PER_PAGE,
                  pagination.active * PER_PAGE
                )
                .map((blog) => (
                  <BlogCard key={blog.slug} {...blog} />
                ))}
            </div>

            {blogs.length > PER_PAGE && (
              <Pagination
                activePage={pagination.active}
                total={pagination.range.length}
                onSetPage={pagination.setPage}
                onPrevious={pagination.previous}
                onNext={pagination.next}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
