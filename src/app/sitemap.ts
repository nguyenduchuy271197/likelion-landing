import siteConfig from "@/config/siteConfig";
import { getBlogSlugs } from "@/services/blogService";
import { MetadataRoute } from "next";
import data from "@/data/data.json";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const courses = data["courses"];

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
