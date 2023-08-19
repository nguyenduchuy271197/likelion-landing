import { HTMLAttributes, ReactNode } from "react";
import { Button } from "../ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CourseTuitionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  action: {
    label: string;
    variant?:
      | "link"
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | null
      | undefined;
  };
  children: ReactNode;
}

function CourseTuitionRow({
  title,
  action,
  className,
  children,
  ...props
}: CourseTuitionProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between gap-4 px-6 py-10 border rounded-lg md:items-center md:flex-row md:gap-8 bg-muted",
        className
      )}
      {...props}
    >
      <div className="space-y-1">
        <h5 className="text-lg font-medium">{title}</h5>
      </div>
      <div className="flex flex-col gap-2 xs:flex-row xs:justify-between xs:items-center md:gap-8 md:items-start xs:shrink-0 md:w-[400px]">
        <div className="space-y-1">{children}</div>
        <div className="w-full xs:w-auto">
          <Button variant={action.variant} size="lg" className="w-full" asChild>
            <Link href="/courses/khoa-hoc-lap-trinh-web-fullstack">
              {action.label}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function CourseTuition() {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-medium">Phuơng thức thanh toán</h2>
      <div className="space-y-4">
        <CourseTuitionRow
          title="Thanh toán một lần giảm còn"
          action={{
            label: "Đăng ký",
            variant: "destructive",
          }}
          className="bg-[#FFEDE1] border-[#FFEDE1]"
        >
          <div className="text-sm line-through text-muted-foreground">
            16,500,000 VNĐ
          </div>
          <div className="flex items-start space-x-2">
            <div className="text-lg font-bold lg:text-xl">15,000,000 VNĐ</div>
          </div>
        </CourseTuitionRow>
        <CourseTuitionRow
          title="Thanh toán thành 3 đợt"
          action={{
            label: "Tìm hiểu thêm",
          }}
        >
          <div className="text-sm text-muted-foreground">Chỉ còn</div>
          <div className="flex items-end space-x-2">
            <div className="text-lg font-bold lg:text-xl">5,500,000 VNĐ</div>
            <div className="font-medium text-muted-foreground">/ tháng</div>
          </div>
        </CourseTuitionRow>
      </div>
    </section>
  );
}
