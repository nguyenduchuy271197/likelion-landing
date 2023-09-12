"use client";

import CheckoutStepper from "@/components/checkout/CheckoutStepper";
import useCheckoutStore from "@/stores/useCheckoutStore";
import { ReactNode } from "react";

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  const courseSlug = useCheckoutStore((state) => state.courseSlug);
  const tuitionOption = useCheckoutStore((state) => state.tuitionOption);

  if (!courseSlug || !tuitionOption)
    return <div>Bạn chưa chọn khoá học nào cả!</div>;
  return (
    <div className="py-10 space-y-8">
      <div className="container">
        <CheckoutStepper />
        {children}
      </div>
    </div>
  );
}
