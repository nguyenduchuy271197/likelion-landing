import CoursePromotionRow from "./CoursePromotionRow";
import CourseSectionHeading from "./CourseSectionHeading";

export interface Promotion {
  prefix: string;
  value: string;
  postfix: string;
}

export default function CoursePromotion({
  promotions,
  slug,
}: {
  promotions?: Promotion[];
  slug: string;
}) {
  if (!promotions) return null;

  return (
    <section className="">
      <div className="max-w-screen-lg px-8 mx-auto">
        <div className="space-y-16">
          <CourseSectionHeading className="text-center text-orange-500">
            Các chương trình ưu đãi hấp dẫn
          </CourseSectionHeading>
          <ul className="grid gap-8 lg:grid-cols-2 lg:auto-rows-fr">
            {promotions.map((promotion, index) => (
              <CoursePromotionRow
                key={index}
                slug={slug}
                promotion={promotion}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
