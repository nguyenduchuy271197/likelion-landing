import { IBlog } from "@/types";
import matter from "gray-matter";
import readingTime from "reading-time";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const GITHUB_OWNER = "nguyenduchuy271197";
const GITHUB_REPO = "likelion-blogs";
const PUBLISHED_FOLDER_PATH = "published";

const publishedBlogApiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${PUBLISHED_FOLDER_PATH}?ref=main`;

function generateBlogUrl(slug: string) {
  return `https://raw.githubusercontent.com/nguyenduchuy271197/likelion-blogs/main/published/${slug}.mdx`;
}

export async function getBlogSlugsFromGithubRepo(
  url: string = publishedBlogApiUrl
) {
  const res = await fetch(publishedBlogApiUrl, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  const fileLists = await res.json();

  const slugs = fileLists.map(
    (file: any) => file.name.split(".")[0]
  ) as string[];

  return slugs;
}

export async function getBlogBySlug(slug: string) {
  const url = generateBlogUrl(slug);
  const res = await fetch(url);
  const source = await res.text();
  const { data, content } = matter(source);

  return {
    data: { ...(data as IBlog), readingTime: readingTime(content).text },
    content,
  };
}

export async function getAllBlogs() {
  const slugs = await getBlogSlugsFromGithubRepo();
  const blogPromises = slugs.map((slug) => getBlogBySlug(slug));
  const blogs = await Promise.all(blogPromises);
  return blogs.map((blog) => blog.data).sort((a, b) => b.day - a.day);
}
