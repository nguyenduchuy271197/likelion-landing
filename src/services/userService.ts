"use server";

import { prisma } from "@/lib/prisma";
import { RegisterFormType } from "@/schema/registerFormSchema";

export async function addUser(user: RegisterFormType) {
  try {
    await prisma.user.create({
      data: user,
    });
  } catch (e) {
    console.log(e);
  }
}
