"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { RegisterContext } from "@/context/RegisterProvider";
import { Course } from "@/validations/registerFormSchema";
import { Button } from "@/components/ui/Button";

export default function RegisterButton({ course }: { course?: Course }) {
  const router = useRouter();
  const { onUpdateCourse } = useContext(RegisterContext);

  function handleRegister() {
    if (course) {
      onUpdateCourse(course);
    }
    router.push("/register");
  }

  return (
    <Button className="w-full" onClick={handleRegister}>
      Đăng ký ngay
    </Button>
  );
}
