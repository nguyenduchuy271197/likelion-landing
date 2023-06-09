import SectionBanner from "@/components/SectionBanner";
import BlogListing from "@/components/blogs/BlogListing";
import LatestBlog from "@/components/blogs/LatestBlog";
import siteConfig from "@/config/siteConfig";
import { getAllBlogs } from "@/services/blogService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Blogs`,
};

export default async function Blogs() {
  const blogs = getAllBlogs();
  return (
    <div>
      <SectionBanner
        title="Blogs"
        description="Blogs hấp dẫn và đa dạng với nhiều chủ đề"
        src={{
          sm: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688543367/banners/blogs-mb.png",
          lg: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688543368/banners/blogs.png",
        }}
      />
      <div className="py-16 min-h-[80vh]">
        <LatestBlog {...blogs[0]} />
        <BlogListing blogs={blogs} />
      </div>
    </div>
  );
}
