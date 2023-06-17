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
import { useMutation } from "@tanstack/react-query";
import { addUser } from "@/services/userService";

export function RegisterDialog({ course }: { course: string }) {
  const router = useRouter();
  const { onResetCourse } = useContext(RegisterContext);
  const {
    isLoading: isRegisterLoading,
    isError: isRegisterError,
    isSuccess: isRegisterSuccess,
    mutate: registerMutate,
  } = useMutation({
    mutationFn: addUser,
  });

  function handleCloseDialog() {
    onResetCourse();
    router.back();
  }

  const formRegisterDialog = (
    <DialogContent onCloseAutoFocus={handleCloseDialog}>
      {/* Header */}
      <DialogHeader>
        <DialogTitle className="uppercase">Đăng ký nhận tư vấn!</DialogTitle>
        <DialogDescription>
          Nhận tư vấn cá nhân, giúp các bạn khám phá các khóa học lập trình chất
          lượng và thú vị.
        </DialogDescription>
      </DialogHeader>

      {/* Form */}
      <RegisterForm course={course} />
    </DialogContent>
  );

  const successRegisterDialog = (
    <DialogContent onCloseAutoFocus={() => router.back()}>
      {/* Header */}
      <DialogHeader>
        <DialogTitle className="uppercase">Đăng ký thành công!</DialogTitle>
        <DialogDescription>
          Cảm ơn bạn đã quan tâm đến khóa học lập trình. Chúng tôi sẽ liên hệ
          với bạn sớm nhất để cung cấp thông tin chi tiết về khóa học và giúp
          bạn có một trải nghiệm học tập tốt nhất.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );

  const failRegisterDialog = (
    <DialogContent onCloseAutoFocus={() => router.back()}>
      {/* Header */}
      <DialogHeader>
        <DialogTitle className="uppercase">Đăng ký thất bại!</DialogTitle>
        <DialogDescription>Đăng ký lại lần nữa!</DialogDescription>
      </DialogHeader>
    </DialogContent>
  );

  return (
    <Dialog defaultOpen={true}>
      {isRegisterError
        ? failRegisterDialog
        : isRegisterSuccess
        ? successRegisterDialog
        : formRegisterDialog}
    </Dialog>
  );
}
