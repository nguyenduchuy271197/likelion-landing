import Icons from "@/components/Icons";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container h-full">
      <div className="flex items-center justify-center h-full">
        <div className="grid gap-8 py-12 md:grid-cols-2 place-items-center min-h-[100vh]">
          <div>
            <div className="max-w-md">
              <h5 className="text-9xl font-bold text-[#ff7710] mb-4">404</h5>
              <p className="mb-4 text-2xl font-medium">
                oops! Không thể tìm thấy Sư tử.
              </p>
              <p className="mb-4 text-lg text-muted-foreground">
                Sư tử đang bận du lịch đến hành tinh khác. Thử tìm Sư tử sau
                nhé.
              </p>

              <Button asChild size="lg">
                <Link href="/">Trở về trang chủ</Link>
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <Icons.notfound className="w-full max-w-xs" />
          </div>
        </div>
      </div>
    </div>
  );
}
