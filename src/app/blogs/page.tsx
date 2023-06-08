import BlogListing from "@/components/blogs/BlogListing";
import LatestBlog from "@/components/blogs/LatestBlog";
import siteConfig from "@/config/siteConfig";
import { getAllBlogs } from "@/services/blogService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Blogs | ${siteConfig.brand}`,
};

export default async function Blogs() {
  const blogs = await getAllBlogs();
  return (
    <div className="py-16 min-h-[80vh]">
      <LatestBlog {...blogs[0]} />
      <BlogListing blogs={blogs} />
    </div>
  );
}
