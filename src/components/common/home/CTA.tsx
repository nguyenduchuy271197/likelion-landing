import { Button } from "@/components/ui/Button";
import { LucideProps } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="mb-16">
      <div className="container">
        <div className="relative h-80 sm:h-96 bg-gradient-to-br from-[#FF7100] to-[#FF9B52] rounded-3xl text-white text-center">
          <div className="absolute hidden -translate-y-1/2 h-44 w-36 top-1/2 right-4 sm:block">
            <Image src="/img/cta/computer.svg" alt="LIKELION CTA" fill />
          </div>
          <div className="absolute -translate-y-1/2 h-44 w-36 top-1/2 left-4">
            <Image src="/img/cta/analytics.svg" alt="LIKELION CTA" fill />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full gap-10 px-4 sm:px-8">
            <h3 className="text-2xl font-medium sm:text-4xl lg:text-5xl">
              Bạn muốn tìm khoá học cho mình?
            </h3>
            <div className="flex flex-col gap-3">
              <Button
                variant="secondary"
                className="sm:px-12 sm:py-8 sm:text-lg text-[#FF7100] rounded-xl px-6 py-6"
                asChild
              >
                <Link href="/contact">Liên hệ tư vấn 1 : 1</Link>
              </Button>
              <p>
                Hoặc{" "}
                <a
                  href="#courses"
                  className="inline underline transition underline-offset-4 hover:opacity-80"
                >
                  xem chi tiết lộ trình{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
