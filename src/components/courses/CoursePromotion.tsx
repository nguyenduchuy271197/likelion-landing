import { Star } from "lucide-react";
import { ReactNode } from "react";

function CoursePromotionRow({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-center gap-4">
      <Star fill="#FF7711" stroke="#FF7711" size={20} />
      {children}
    </li>
  );
}

export default function CoursePromotion() {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-medium">Các chương trình ưu đãi</h2>
      <ul className="space-y-4">
        <CoursePromotionRow>
          <p>
            Học theo nhóm giảm thêm{" "}
            <span className="text-[#FF7711] font-bold">500.000 VND</span>
          </p>
        </CoursePromotionRow>
        <CoursePromotionRow>
          <p>
            Cựu học viên giảm thêm{" "}
            <span className="text-[#FF7711] font-bold">500.000 VND</span>
          </p>
        </CoursePromotionRow>
      </ul>
    </section>
  );
}
