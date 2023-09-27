import { Gift, Star } from "lucide-react";
import CourseSectionHeading from "./CourseSectionHeading";

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

// export default function CoursePromotion({
//   promotions,
// }: {
//   promotions?: string[];
// }) {
//   if (!promotions) return null;

//   return (
//     <section className="">
// <CourseSectionHeading>Các chương trình ưu đãi</CourseSectionHeading>;
//       <ul className="space-y-4">
//         {promotions.map((promotion) => (
//           <CoursePromotionRow key={promotion} text={promotion} />
//         ))}
//       </ul>
//     </section>
//   );
// }

export default function CoursePromotion({
  promotions,
}: {
  promotions?: string[];
}) {
  if (!promotions || promotions.length === 0) return null;

  return (
    <div className="grid">
      <div className="flex flex-col items-center max-w-screen-xl gap-6 p-6 m-auto lg:flex-row lg:gap-0">
        <div className="relative flex w-full flex-1 items-center lg:basis-[400px] lg:text-right">
          <div className="flex-1 lg:pr-6">
            <h2 className="text-4xl font-bold text-center">
              Các chương trình ưu đãi hấp dẫn
            </h2>
          </div>
          <div className="hidden w-16 h-px mt-px bg-primary top-1/2 lg:block" />
        </div>
        <ul className="lg:basis-[750px]">
          {promotions.map((promotion) => (
            <li className="relative py-6 group" key={promotion}>
              <div className="absolute inset-0 hidden w-px bg-primary group-first:top-1/2 group-last:bottom-1/2 lg:block" />
              <div className="items-center gap-6 lg:flex">
                <div className="relative mb-4 lg:mb-0 lg:pl-16">
                  <div className="absolute left-0 hidden w-full h-px bg-primary top-1/2 lg:block" />
                  <div className="relative grid w-24 h-24 border border-solid rounded-full border-primary-500 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                    <Gift
                      className="block w-full h-full m-auto max-h-12 text-muted"
                      strokeWidth={1}
                    />
                  </div>
                </div>
                <div>
                  <h3
                    dangerouslySetInnerHTML={{ __html: promotion }}
                    className="[&>strong]:font-bold [&>strong]:text-[#FF7711] mb-2 text-xl font-bold"
                  />
                  <p className="opacity-75">
                    Lorem ipsum dolor sit amet consectetur. Consequat
                    sollicitudin in euismod dolor, nec sodales viverra.
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
