"use client";

import { formatDate } from "@/lib/date";
import { IBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePagination } from "@mantine/hooks";
import { Pagination } from "../ui/Pagination";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

function BlogCard({
  slug,
  title,
  day,
  imageUrl,
  readingTime,
  publishOn,
}: IBlog) {
  return (
    <Link href={`/blogs/${slug}`} className="flex flex-col group">
      <div className="h-[200px]">
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={300}
          className="object-cover w-full h-full transition duration-300 rounded-lg group-hover:scale-105"
        />
      </div>
      <div className="py-6">
        <p className="mb-2 text-sm text-muted-foreground">
          {formatDate(publishOn)}
        </p>
        <h2 className="mb-2 text-xl font-medium tracking-tight scroll-m-20 lg:text-2xl line-clamp-1">
          {title}
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground line-clamp-3">
          Becoming a full-stack developer requires a comprehensive understanding
          of various technologies and tools. A full-stack developer is
          proficient in both front-end and back-end development, making them
          versatile and capable of building complete web
        </p>
      </div>
    </Link>
  );
}

const PER_PAGE = 6;

export default function BlogListing({ blogs }: { blogs: IBlog[] }) {
  const searchParams = useSearchParams();

  const pagination = usePagination({
    total: Math.ceil(blogs.length / PER_PAGE),
    initialPage: Number(searchParams.get("page")) || 1,
  });

  useEffect(() => {
    pagination.setPage(Number(searchParams.get("page")) || 1);
  }, [searchParams, pagination]);

  return (
    <div className="mt-16">
      <div className="container">
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
          <Pagination
            activePage={pagination.active}
            total={pagination.range.length}
            onSetPage={pagination.setPage}
            onPrevious={pagination.previous}
            onNext={pagination.next}
          />
        </div>
      </div>
    </div>
  );
}
