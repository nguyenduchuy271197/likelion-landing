"use client";

import Link from "next/link";
import useFixedButtonStore from "./hooks/useFixedButton";
import { Button } from "./Button";

export default function FixedButton() {
  const { isShowed } = useFixedButtonStore();

  if (!isShowed) return null;

  return (
    <div className="fixed z-50 w-full max-w-sm mx-auto -translate-x-1/2 left-1/2 bottom-8">
      <Button className="w-full" asChild>
        <Link href="#form">Đăng ký ngay</Link>
      </Button>
    </div>
  );
}
