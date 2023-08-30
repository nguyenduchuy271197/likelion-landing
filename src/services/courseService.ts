"use server";

import { prisma } from "@/lib/prisma";
import { ICourse } from "@/types";

export async function getCourses() {
  const courses = await prisma.course.findMany();
  return courses as ICourse[];
}

export async function getCourseBySlug(slug: string) {
  const course = await prisma.course.findUnique({
    where: {
      slug: slug,
    },
  });

  return course as ICourse;
}
