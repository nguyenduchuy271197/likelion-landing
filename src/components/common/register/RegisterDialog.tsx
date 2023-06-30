"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import { useRouter } from "next/navigation";
import { RegisterForm } from "./RegisterForm";
import { useContext, useState } from "react";
import { RegisterContext } from "@/context/RegisterProvider";
import useRegisterUser from "./useRegisterUser";
import RegisterSuccess from "./RegisterSuccess";

export function RegisterDialog({ course }: { course: string }) {
  const router = useRouter();
  const { onResetCourse } = useContext(RegisterContext);
  const {
    isRegisterLoading,
    isRegisterError,
    isRegisterSuccess,
    registerUser,
  } = useRegisterUser();

  function handleCloseDialog() {
    onResetCourse();
    router.back();
  }

  return (
    <Dialog defaultOpen={true}>
      <DialogContent onCloseAutoFocus={handleCloseDialog}>
        {isRegisterSuccess ? (
          <RegisterSuccess />
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
              initialCourse={course}
              registerUser={registerUser}
              isSubmitting={isRegisterLoading}
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
