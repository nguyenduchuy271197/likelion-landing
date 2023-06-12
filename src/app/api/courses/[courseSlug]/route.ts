import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { courseSlug: string } }
) {
  const course = await prisma.course.findUnique({
    where: {
      slug: params.courseSlug,
    },
    include: {
      modules: true,
    },
  });

  return NextResponse.json({ course }, { status: 200 });
}
