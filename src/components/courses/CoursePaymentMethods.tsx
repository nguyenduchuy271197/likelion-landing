"use client";

import { HTMLAttributes, ReactNode, useContext } from "react";
import { Button } from "../ui/Button";
import Link from "next/link";
import { cn, formatNumber } from "@/lib/utils";
import { ICourse } from "@/types";
import CourseSectionHeading from "./CourseSectionHeading";
import useCheckoutStore from "@/stores/useCheckoutStore";

interface CourseTuitionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  slug: string;
  priority?: boolean;
  action: {
    label: string;
    href: string;
  };
  tuition_option?: "once" | "monthly";
  children: ReactNode;
}

function CoursePaymentMethodRow({
  title,
  slug,
  priority = false,
  action,
  tuition_option = "once",
  className,
  children,
  ...props
}: CourseTuitionProps) {
  const startCheckout = useCheckoutStore((state) => state.startCheckout);
  return (
    <div
      className={cn(
        "flex flex-col justify-between gap-4 px-6 py-10 border rounded-lg md:items-center md:flex-row md:gap-8 bg-[#FFEDE1]",
        priority && "bg-gradient-to-r from-[#ff7711] to-[#FFA563] text-muted",
        className
      )}
      {...props}
    >
      <div className="space-y-1">
        <h5 className="text-lg font-medium">{title}</h5>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center md:gap-8 md:items-start sm:shrink-0 md:w-[400px]">
        <div className="space-y-1">{children}</div>
        <div className="w-full xs:w-auto sm:w-full sm:max-w-[160px]">
          <Button
            size="lg"
            className="w-full"
            onClick={() => {
              startCheckout(slug, tuition_option);
            }}
            asChild
          >
            <Link href={action.href}>{action.label}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function CoursePaymentMethods({
  slug,
  payment_methods,
}: {
  slug: string;
  payment_methods: ICourse["payment_methods"];
}) {
  if (!payment_methods) return null;

  return (
    <section>
      <CourseSectionHeading>Phương thức thanh toán</CourseSectionHeading>
      <div className="space-y-4">
        <CoursePaymentMethodRow
          title="Thanh toán một lần giảm còn"
          action={{
            label: "Mua ngay",
            href: `/checkout`,
          }}
          tuition_option="once"
          slug={slug}
          priority
        >
          {payment_methods.once.discounted ? (
            <>
              <div className="text-sm line-through">
                {formatNumber(payment_methods.once.origin)} VNĐ
              </div>
              <div className="flex items-start space-x-2">
                <div className="text-lg font-bold lg:text-xl">
                  {formatNumber(payment_methods.once.discounted)} VNĐ
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-start space-x-2">
              <div className="text-lg font-bold lg:text-xl">
                {formatNumber(payment_methods.once.origin)} VNĐ
              </div>
            </div>
          )}
        </CoursePaymentMethodRow>
        <CoursePaymentMethodRow
          title={`Thanh toán thành ${payment_methods.monthly.times} đợt`}
          tuition_option="monthly"
          slug={slug}
          action={{
            label: "Mua ngay",
            href: `/checkout`,
          }}
        >
          <div className="text-sm text-muted-foreground">Chỉ còn</div>
          <div className="flex items-end space-x-2">
            <div className="text-lg font-bold lg:text-xl">
              {formatNumber(payment_methods.monthly.origin)} VNĐ
            </div>
            <div className="font-medium">/ tháng</div>
          </div>
        </CoursePaymentMethodRow>
      </div>
    </section>
  );
}
