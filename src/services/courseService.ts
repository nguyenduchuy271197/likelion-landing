import { prisma } from "@/lib/prisma";
import { ICourse } from "@/types";
import data from "@/data/data.json";

export async function getCourses() {
  const courses = await prisma.course.findMany();
  return courses as ICourse[];
}

export function getCourseBySlug(slug: string) {
  // const course = await prisma.course.findUnique({
  //   where: {
  //     slug: slug,
  //   },
  // });

  const course = data["courses"].find((course) => course.slug === slug);

  return course as ICourse;
}
