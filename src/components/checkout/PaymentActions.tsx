"use client";

import useCheckoutStore from "@/stores/useCheckoutStore";
import { Button } from "../ui/Button";
import Link from "next/link";

export default function PaymentActions() {
  const nextStep = useCheckoutStore((state) => state.nextStep);
  return (
    <div className="flex items-center justify-between gap-8">
      <Button asChild disabled variant="outline">
        <Link href="#">Trở về</Link>
      </Button>
      <Button onClick={() => nextStep()} asChild>
        <Link href="/checkout/payment/confirmation">Hoàn tất thanh toán</Link>
      </Button>
    </div>
  );
}
