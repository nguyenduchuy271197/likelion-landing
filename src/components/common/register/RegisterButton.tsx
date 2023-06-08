"use client";

import Link from "next/link";
import { Button } from "../../ui/Button";

export default function RegisterButton() {
  return (
    <Button asChild>
      <Link href="/register" className="hidden sm:block">
        Đăng ký ngay
      </Link>
    </Button>
  );
}
