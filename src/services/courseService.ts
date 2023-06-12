import prisma from "@/lib/prisma";
import { ICourse } from "@/types";

export async function getCourseBySlug(slug: string) {
  const course = await prisma.course.findUnique({
    where: {
      slug: slug,
    },
    include: {
      modules: true,
    },
  });

  return course as ICourse;
}
