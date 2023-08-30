"use client";

import { Button } from "@/components/ui/Button";
import { RegisterForm } from "./RegisterForm";
import useRegisterUser from "./useRegisterUser";
import Link from "next/link";
import RegisterSuccess from "./RegisterSuccess";
import { useContext } from "react";
import { RegisterContext } from "@/context/RegisterProvider";
import { ICourse } from "@/types";

export default function RegisterFormBox({
  initialCourse,
  courses,
}: {
  initialCourse: string;
  courses: ICourse[];
}) {
  const { isRegisterLoading, isRegisterSuccess, registerUser } =
    useRegisterUser();

  const { onResetCourse } = useContext(RegisterContext);

  return (
    <div className="w-full">
      {isRegisterSuccess ? (
        <RegisterSuccess>
          <Button asChild onClick={onResetCourse}>
            <Link href="/">Trở về trang chủ</Link>
          </Button>
        </RegisterSuccess>
      ) : (
        <>
          <h1 className="mb-12 text-2xl font-bold text-center">
            HÃY ĐỂ LIKELION TƯ VẤN CHO BẠN!
          </h1>
          <RegisterForm
            initialCourse={initialCourse}
            registerUser={registerUser}
            isSubmitting={isRegisterLoading}
            courses={courses}
          />
        </>
      )}
    </div>
  );
}
