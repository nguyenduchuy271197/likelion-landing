import { IBlog } from "@/types";
import matter from "gray-matter";
import readingTime from "reading-time";

const GITHUB_TOKEN =
  "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";
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
  console.log(fileLists);

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
