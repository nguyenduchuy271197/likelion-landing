import { Star } from "lucide-react";

function CoursePromotionRow({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-4">
      <Star fill="#FF7711" stroke="#FF7711" size={20} />
      <p
        dangerouslySetInnerHTML={{ __html: text }}
        className="[&>strong]:font-bold [&>strong]:text-[#FF7711]"
      />
    </li>
  );
}

export default function CoursePromotion({
  promotions,
}: {
  promotions?: string[];
}) {
  if (!promotions) return null;

  return (
    <section>
      <h2 className="mb-6 text-2xl font-medium">Các chương trình ưu đãi</h2>
      <ul className="space-y-4">
        {promotions.map((promotion) => (
          <CoursePromotionRow key={promotion} text={promotion} />
        ))}
      </ul>
    </section>
  );
}
