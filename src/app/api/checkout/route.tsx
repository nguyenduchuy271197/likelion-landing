import { prisma } from "@/lib/prisma";
import { checkoutSchema } from "@/schema/checkout";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const checkoutValidator = checkoutSchema.safeParse(body.data);

    if (!checkoutValidator.success)
      return NextResponse.json("Something went wrong", {
        status: 500,
      });

    await prisma.checkout.create({
      data: checkoutValidator.data,
    });

    return NextResponse.json("OK", {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json("Something went wrong", {
      status: 500,
    });
  }
}
