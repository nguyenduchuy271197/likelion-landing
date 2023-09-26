import { prisma } from "@/lib/prisma";
import data from "@/data/data.json";

export async function getCourses() {
  const courses = await prisma.course.findMany();
  return courses;
}

export function getCourseBySlug(slug: string) {
  // const course = await prisma.course.findUnique({
  //   where: {
  //     slug: slug,
  //   },
  // });

  const course = data["courses"].find((course) => course.slug === slug);

  return course;
}
