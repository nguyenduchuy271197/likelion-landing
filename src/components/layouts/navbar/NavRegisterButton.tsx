"use client";

import { Button } from "@/components/ui/Button";
import { RegisterDialogContext } from "@/context/RegisterDialogProvider";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const excludeRoutes = ["/register", "/courses/"];

export default function NavRegisterButton() {
  const pathname = usePathname();
  const { setOpen } = useContext(RegisterDialogContext);

  return (
    <Button
      className={cn(
        "w-full",
        excludeRoutes.some((route) => pathname.startsWith(route)) && "invisible"
      )}
      asChild
      onClick={() => setOpen(true)}
    >
      <Link href="/register">Đăng ký ngay</Link>
    </Button>
  );
}
