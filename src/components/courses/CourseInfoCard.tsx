import Image from "next/image";
import { Button } from "../ui/Button";
import CourseFeatureItem from "./CourseFeatureItem";
import { Airplay } from "lucide-react";

export default function CourseInfoCard() {
  return (
    <div className="hidden lg:block">
      <div className="sticky top-[var(--navbar-height)] shadow-xl">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src="/img/blogs/blog-1.avif"
            alt=""
            fill
            className="w-full h-full"
          />
        </div>
        <div className="p-6">
          {/* Price */}
          <div>
            <div className="flex items-center gap-4 mb-1">
              <div className="flex items-center gap-1 text-3xl font-bold tracking-tight scroll-m-20 lg:text-4xl">
                <u className="text-3xl">đ</u>
                349,000
              </div>
              <div className="flex items-center gap-1 line-through text-muted-foreground">
                <u>đ</u>
                1,999,000
              </div>
            </div>
            <div className="text-muted-foreground">83% off</div>
            <Button className="w-full my-4" size="lg">
              Đăng ký ngay
            </Button>
          </div>

          {/* Features */}
          <div className="my-2">
            <h4 className="mb-4 font-medium tracking-tight scroll-m-20">
              Khoá học bao gồm:
            </h4>
            <ul className="flex flex-col gap-4 mt-4 text-sm">
              <CourseFeatureItem
                icon={Airplay}
                name="28.5 hours on-demand video"
              />
              <CourseFeatureItem icon={Airplay} name="14 articles" />
              <CourseFeatureItem
                icon={Airplay}
                name="66 downloadable resources"
              />
              <CourseFeatureItem
                icon={Airplay}
                name="28.5 hours on-demand video"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
