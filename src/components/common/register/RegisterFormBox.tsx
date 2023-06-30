"use client";

import { Button } from "@/components/ui/Button";
import { RegisterForm } from "./RegisterForm";
import useRegisterUser from "./useRegisterUser";
import Link from "next/link";
import RegisterSuccess from "./RegisterSuccess";
import { useContext } from "react";
import { RegisterContext } from "@/context/RegisterProvider";

export default function RegisterFormBox({
  initialCourse,
}: {
  initialCourse: string;
}) {
  const {
    isRegisterLoading,
    isRegisterError,
    isRegisterSuccess,
    registerUser,
  } = useRegisterUser();

  const { onResetCourse } = useContext(RegisterContext);

  return (
    <div>
      {isRegisterSuccess ? (
        <RegisterSuccess>
          <Button asChild onClick={onResetCourse}>
            <Link href="/">Trở về trang chủ</Link>
          </Button>
        </RegisterSuccess>
      ) : (
        <>
          <h1 className="mb-12 text-3xl font-extrabold tracking-tight text-center scroll-m-20 lg:text-4xl">
            Đăng ký nhận tư vấn
          </h1>
          <RegisterForm
            initialCourse={initialCourse}
            registerUser={registerUser}
            isSubmitting={isRegisterLoading}
          />
        </>
      )}
    </div>
  );
}
