import { courses } from "@/components/layouts/navbar/Navbar";
import siteConfig from "@/config/siteConfig";
import { getBlogSlugs } from "@/services/blogService";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/faq", "/about", "/contact", "/blogs"];

  const courseRoutes = courses.map((c) => `/courses/${c.slug}`);

  const blogRoutes = getBlogSlugs().map((slug) => `/blogs/${slug}`);

  return [...staticRoutes, ...courseRoutes, ...blogRoutes].map((r) => ({
    url: `${siteConfig.url}${r}`,
    lastModified: new Date(),
  }));
}
