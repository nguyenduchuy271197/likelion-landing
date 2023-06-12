import fetchConfig from "@/config/fetchConfig";
import { ICourse } from "@/types";

export async function getCourseBySlug(slug: string) {
  const res = await fetch(`${fetchConfig.course.baseUrl}/api/courses/${slug}`);

  if (!res.ok) throw new Error("Failed to fetch");

  const data = await res.json();

  return data.course as ICourse;
}
