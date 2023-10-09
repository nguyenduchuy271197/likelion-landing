import { getBlogs } from "@/services/blogService";
import SectionHeading from "../SectionHeading";
import { BlogCard } from "@/components/blogs/BlogListing";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Blogs() {
  const blogs = getBlogs("tutorial");
  return (
    <section className="md:bg-[linear-gradient(to_bottom,_#f97316_50%,_#fff_50%)]">
      <div className="container">
        <div className="space-y-16 md:pt-20">
          <SectionHeading
            title="Blogs"
            subtitle="Nâng cao kỹ năng viết code với các hướng dẫn trực quan"
            color="white"
            className="hidden sm:block"
          />

          <SectionHeading
            title="Blogs"
            subtitle="Nâng cao kỹ năng viết code với các hướng dẫn trực quan"
            className="block sm:hidden"
          />
          <div className="space-y-6">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {blogs.slice(0, 3).map((blog) => (
                <BlogCard key={blog.slug} {...blog} />
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 font-medium group"
              >
                Xem thêm
                <MoveRight className="transition group-hover:translate-x-1 opacity-80" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
