"use client";

import { HTMLAttributes, ReactNode, useContext } from "react";
import { Button } from "../ui/Button";
import Link from "next/link";
import { cn, formatNumber } from "@/lib/utils";
import { RegisterDialogContext } from "@/context/RegisterDialogProvider";
import CoursePromotion from "./CoursePromotion";

interface CourseTuitionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  priority?: boolean;
  action: {
    label: string;
    href: string;
  };
  option: number;
  children: ReactNode;
}

interface CoursePaymentMethods {
  slug: string;
  payment_methods?: {
    once: {
      origin: number;
      discounted?: number | undefined;
    };
    monthly: {
      times: number;
      origin: number;
    };
  };
}

function CoursePaymentMethodRow({
  title,
  priority = false,
  action,
  className,
  children,
  option,
  ...props
}: CourseTuitionProps) {
  const { setOpen: setDialogOpen } = useContext(RegisterDialogContext);

  return (
    <div
      className={cn(
        "p-12 rounded-lg flex-1 h-[400px] flex flex-col",
        priority
          ? "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-muted"
          : "bg-gradient-to-r from-rose-100 to-teal-100",
        className
      )}
      {...props}
    >
      <div className="flex mb-4">
        <div className="px-4 py-2 text-sm font-bold rounded-lg bg-primary/10">
          Lựa chọn {option}
        </div>
      </div>
      <h5 className="text-2xl font-bold">{title}</h5>
      <div className="flex flex-col gap-6 mt-auto">
        <div className="space-y-1">{children}</div>
        <div className="">
          <Button
            size="lg"
            className="w-full px-12 py-8 text-base font-bold"
            onClick={() => setDialogOpen(true)}
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
}: CoursePaymentMethods) {
  if (!payment_methods) return null;

  return (
    <section className="bg-[#FFD03D]" id="payment">
      <div className="max-w-screen-lg px-8 mx-auto">
        <div className="space-y-16 py-28">
          <h2 className="text-3xl font-bold text-center sm:text-4xl">
            Phương thức thanh toán
          </h2>
          <div className="flex flex-col gap-8 md:flex-row">
            <CoursePaymentMethodRow
              title="Thanh toán một lần giảm còn"
              action={{
                label: "Đăng ký",
                href: `/register?course=${slug}`,
              }}
              option={1}
              priority
            >
              {payment_methods.once.discounted ? (
                <div className="space-y-2">
                  <div className="text-lg font-bold lg:text-4xl">
                    {formatNumber(payment_methods.once.discounted)} VNĐ
                  </div>
                  <div className="line-through">
                    {formatNumber(payment_methods.once.origin)} VNĐ
                  </div>
                </div>
              ) : (
                <div className="flex items-start space-x-2">
                  <div className="text-lg font-bold lg:text-xl">
                    {formatNumber(payment_methods.once.origin)} VNĐ
                  </div>
                </div>
              )}
            </CoursePaymentMethodRow>
            <CoursePaymentMethodRow
              option={2}
              title={`Thanh toán thành ${payment_methods.monthly.times} đợt`}
              action={{
                label: "Tìm hiểu thêm",
                href: `/register?course=${slug}`,
              }}
            >
              <div className="text-muted-foreground">Chỉ còn</div>
              <div className="flex items-end space-x-2">
                <div className="text-4xl font-bold">
                  {formatNumber(payment_methods.monthly.origin)} VNĐ
                </div>
                <div className="font-medium">/ tháng</div>
              </div>
            </CoursePaymentMethodRow>
          </div>
        </div>
      </div>
    </section>
  );
}
