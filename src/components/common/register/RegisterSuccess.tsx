import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ReactNode } from "react";

export default function RegisterSuccess({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-start">
      <h2 className="mb-2 text-lg font-semibold leading-none tracking-tight uppercase">
        Đăng ký thành công!
      </h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Cảm ơn bạn đã quan tâm đến khóa học lập trình. Chúng tôi sẽ liên hệ với
        bạn sớm nhất để cung cấp thông tin chi tiết về khóa học và giúp bạn có
        một trải nghiệm học tập tốt nhất.
      </p>
      {children}
    </div>
  );
}
