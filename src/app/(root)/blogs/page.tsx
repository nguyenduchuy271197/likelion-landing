import SectionBanner from "@/components/SectionBanner";
import BlogListing from "@/components/blogs/BlogListing";
import LatestBlog from "@/components/blogs/LatestBlog";
import { Button } from "@/components/ui/Button";
import { getBlogs } from "@/services/blogService";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Blogs`,
  openGraph: {
    title: "Blogs",
    images: [
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1692261989/og/og_blogs_t812tr.png",
    ],
  },
};

export default function Blogs() {
  const blogs = getBlogs();
  const events = getBlogs("events");
  const tutorials = getBlogs("tutorial");
  return (
    <div>
      <SectionBanner
        title="Blogs"
        description="Mỗi tuần một bài viết mới với chủ đề đa dạng, cung cấp hiểu biết sâu sắc về công nghệ và lập trình, mang tính ứng dụng cao trong công việc và cuộc sống."
        src={{
          sm: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688543367/banners/blogs-mb.png",
          lg: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688543368/banners/blogs.png",
        }}
      />

      <div className="py-16 min-h-[80vh]">
        <LatestBlog {...blogs[0]} />
        <div className="space-y-8 md:space-y-16">
          <BlogListing blogs={events} heading="Sự kiện" />
          <BlogListing blogs={tutorials} heading="Kiến thức" />
        </div>
      </div>
    </div>
  );
}
