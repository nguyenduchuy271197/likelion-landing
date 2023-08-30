import siteConfig from "@/config/siteConfig";
import { getBlogSlugs } from "@/services/blogService";
import { getCourses } from "@/services/courseService";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const courses = await getCourses();

  const staticRoutes = [
    "",
    "/faq",
    "/about",
    "/contact",
    "/blogs",
    "/register",
  ];

  const courseRoutes = courses.map((c) => `/courses/${c.slug}`);

  const blogRoutes = getBlogSlugs().map((slug) => `/blogs/${slug}`);

  return [...staticRoutes, ...courseRoutes, ...blogRoutes].map((r) => ({
    url: `${siteConfig.url}${r}`,
    lastModified: new Date(),
  }));
}
