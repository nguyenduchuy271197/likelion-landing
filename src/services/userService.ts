"use server";

import { prisma } from "@/lib/prisma";
import { RegisterForm } from "@/validations/registerFormSchema";
import moment from "moment";

export async function addUser(user: RegisterForm) {
  console.log(moment().toISOString());
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
