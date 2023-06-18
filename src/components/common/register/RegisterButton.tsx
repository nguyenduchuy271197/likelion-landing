"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { RegisterContext } from "@/context/RegisterProvider";
import { RegisterFormType } from "@/schema/registerFormSchema";
import { Button } from "@/components/ui/Button";

export default function RegisterButton({
  courseId,
}: {
  courseId?: RegisterFormType["courseId"];
}) {
  const router = useRouter();
  const { onUpdateCourse } = useContext(RegisterContext);

  function handleRegister() {
    if (courseId) {
      onUpdateCourse(courseId);
    }
    router.push("/register");
  }

  return (
    <Button className="w-full" onClick={handleRegister}>
      Đăng ký ngay
    </Button>
  );
}
