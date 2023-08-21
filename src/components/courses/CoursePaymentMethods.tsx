"use client";

import { HTMLAttributes, ReactNode, useContext } from "react";
import { Button } from "../ui/Button";
import Link from "next/link";
import { cn, formatNumber } from "@/lib/utils";
import { ICourse } from "@/types";
import { RegisterDialogContext } from "@/context/RegisterDialogProvider";

interface CourseTuitionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  priority?: boolean;
  action: {
    label: string;
    href: string;
  };
  children: ReactNode;
}

function CoursePaymentMethodRow({
  title,
  priority = false,
  action,
  className,
  children,
  ...props
}: CourseTuitionProps) {
  const { setOpen: setDialogOpen } = useContext(RegisterDialogContext);

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
}: {
  slug: string;
  payment_methods: ICourse["payment_methods"];
}) {
  if (!payment_methods) return null;

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-medium">Phương thức thanh toán</h2>
      <div className="space-y-4">
        <CoursePaymentMethodRow
          title="Thanh toán một lần giảm còn"
          action={{
            label: "Đăng ký",
            href: `/register?course=${slug}`,
          }}
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
          action={{
            label: "Tìm hiểu thêm",
            href: `/register?course=${slug}`,
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
