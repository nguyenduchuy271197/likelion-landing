"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function RegisterButton() {
  return (
    <Button asChild>
      <Link href="/register">Đăng ký ngay</Link>
    </Button>
  );
}
