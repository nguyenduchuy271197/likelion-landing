import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const newUser = await request.json();

  try {
    await prisma.user.create({
      data: newUser,
    });

    return Response.json(
      {
        message: "ok",
      },
      { status: 201 }
    );
  } catch (e) {
    return Response.json(
      {
        message: "ok",
      },
      { status: 500 }
    );
  }
}
