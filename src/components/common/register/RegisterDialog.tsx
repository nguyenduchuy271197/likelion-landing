"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import { useRouter } from "next/navigation";
import { RegisterForm } from "./RegisterForm";
import { useContext, useState } from "react";
import { RegisterContext } from "@/context/RegisterProvider";
import useRegisterUser from "./useRegisterUser";
import RegisterSuccess from "./RegisterSuccess";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { RegisterDialogContext } from "@/context/RegisterDialogProvider";
import { ICourse } from "@/types";

export function RegisterDialog({
  initialCourse,
  courses,
}: {
  initialCourse: string;
  courses: ICourse[];
}) {
  const router = useRouter();
  const { onResetCourse } = useContext(RegisterContext);
  const { open, setOpen } = useContext(RegisterDialogContext);

  const { isRegisterLoading, isRegisterSuccess, registerUser } =
    useRegisterUser();

  function handleCloseDialog() {
    setOpen(false);
    onResetCourse();
    router.back();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent onCloseAutoFocus={handleCloseDialog}>
        {isRegisterSuccess ? (
          <RegisterSuccess>
            <Button
              asChild
              onClick={() => {
                setOpen(false);
                onResetCourse();
              }}
            >
              <Link href="/">Trở về trang chủ</Link>
            </Button>
          </RegisterSuccess>
        ) : (
          <>
            {/* Header */}
            <DialogHeader>
              <DialogTitle className="text-2xl uppercase">
                Hãy để LIKELION tư vấn cho bạn!
              </DialogTitle>
            </DialogHeader>

            {/* Form */}
            <RegisterForm
              initialCourse={initialCourse}
              registerUser={registerUser}
              isSubmitting={isRegisterLoading}
              courses={courses}
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
