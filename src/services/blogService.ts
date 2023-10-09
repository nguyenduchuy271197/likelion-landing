import { IBlog } from "@/types";
import matter from "gray-matter";
import readingTime from "reading-time";
import path from "path";
import fs from "fs";

type BlogCategory = "events" | "tutorial";

export const MDX_RELATIVE_PATH = "src/mdx";
export const MDX_ABSOLUTE_PATH = path.join(process.cwd(), MDX_RELATIVE_PATH);

export const getBlogSlugs = (): string[] => {
  return fs.readdirSync(MDX_ABSOLUTE_PATH).map((file) => {
    const slug = file.slice(0, -4);
    return slug;
  });
};

export function getBlogBySlug(slug: string) {
  const source = fs.readFileSync(
    path.join(MDX_ABSOLUTE_PATH, slug + ".mdx"),
    "utf-8"
  );
  const { data, content } = matter(source);

  return {
    data: {
      ...data,
      readingTime: readingTime(content).minutes,
      tags: data.tags?.split(", "),
    } as IBlog,
    content,
  };
}

export function getAllBlogs() {
  const slugs = getBlogSlugs();
  const blogs = slugs.map((slug) => getBlogBySlug(slug));
  return blogs
    .map((blog) => blog.data)
    .sort((a, b) => b.publishOn - a.publishOn);
}

export function getBlogsByTag(tag: string) {
  const slugs = getBlogSlugs();
  const blogs = slugs.map((slug) => getBlogBySlug(slug));
  return blogs
    .filter((blog) => blog.data.tags?.includes(tag))
    .map((blog) => blog.data)
    .sort((a, b) => b.publishOn - a.publishOn);
}

export function getBlogs(category?: BlogCategory) {
  const slugs = getBlogSlugs();
  const blogs = slugs.map((slug) => getBlogBySlug(slug));
  return blogs
    .filter((blog) => (category ? blog.data.tags?.includes(category) : true))
    .map((blog) => blog.data)
    .sort((a, b) => b.publishOn - a.publishOn);
}
