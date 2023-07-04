import { IBlog } from "@/types";
import matter from "gray-matter";
import readingTime from "reading-time";
import path from "path";
import fs from "fs";

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
    data: { ...(data as IBlog), readingTime: readingTime(content).text },
    content,
  };
}

export function getAllBlogs() {
  const slugs = getBlogSlugs();
  const blogs = slugs.map((slug) => getBlogBySlug(slug));
  return blogs.map((blog) => blog.data).sort((a, b) => b.day - a.day);
}
