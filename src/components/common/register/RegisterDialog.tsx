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

  // const successRegisterDialog = (
  //   <>
  //     {/* Header */}
  //     <DialogHeader>
  //       <DialogTitle className="uppercase">Đăng ký thành công!</DialogTitle>
  //       <DialogDescription>
  //         Cảm ơn bạn đã quan tâm đến khóa học lập trình. Chúng tôi sẽ liên hệ
  //         với bạn sớm nhất để cung cấp thông tin chi tiết về khóa học và giúp
  //         bạn có một trải nghiệm học tập tốt nhất.
  //       </DialogDescription>
  //     </DialogHeader>
  //   </>
  // );

  return (
    <Dialog defaultOpen={true}>
      <DialogContent onCloseAutoFocus={handleCloseDialog}>
        {isRegisterSuccess ? (
          <RegisterSuccess />
        ) : (
          <>
            {/* Header */}
            <DialogHeader>
              <DialogTitle className="uppercase">
                Đăng ký nhận tư vấn!
              </DialogTitle>
              <DialogDescription>
                Nhận tư vấn cá nhân, giúp các bạn khám phá các khóa học lập
                trình chất lượng và thú vị.
              </DialogDescription>
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
