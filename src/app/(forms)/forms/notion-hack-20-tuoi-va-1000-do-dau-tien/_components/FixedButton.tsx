"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import useFixedButtonStore from "./hooks/useFixedButton";

export default function FixedButton() {
  const { isShowed } = useFixedButtonStore();

  if (!isShowed) return null;

  return (
    <Button
      type="submit"
      size="lg"
      className="mx-auto uppercase bg-[#FF7100] text-white font-bold h-14  w-full hover:bg-[#FF7100]/80 text-base fixed left-1/2 -translate-x-1/2 bottom-8 max-w-sm z-50"
      asChild
    >
      <Link href="#form">Đăng ký ngay</Link>
    </Button>
  );
}
