"use server";

import { prisma } from "@/lib/prisma";
import { RegisterFormType } from "@/schema/registerFormSchema";
import moment from "moment";

export async function addUser(user: RegisterFormType) {
  try {
    await prisma.user.create({
      data: {
        ...user,
        registration_date: moment().toISOString(),
      },
    });
  } catch (e) {
    console.log(e);
  }
}
