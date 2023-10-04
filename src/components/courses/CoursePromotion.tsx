import { Star } from "lucide-react";
import CourseSectionHeading from "./CourseSectionHeading";

function CoursePromotionRow({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-4 px-8 py-4 text-lg border border-orange-500 rounded-lg bg-orange-50">
      <svg
        viewBox="0 0 60 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 text-orange-500"
      >
        <path
          d="M0.0302734 13.5098C4.94027 13.5098 8.91022 17.4896 8.91022 22.3896C8.91022 27.2896 4.93027 31.2695 0.0302734 31.2695V37.1904C0.0302734 40.4604 2.68026 43.1104 5.95026 43.1104H53.3303C56.6003 43.1104 59.2502 40.4604 59.2502 37.1904V31.2695C54.3402 31.2695 50.3702 27.2896 50.3702 22.3896C50.3702 17.4896 54.3502 13.5098 59.2502 13.5098V7.58984C59.2502 4.31984 56.6003 1.66992 53.3303 1.66992H5.95026C2.68026 1.66992 0.0302734 4.31984 0.0302734 7.58984V13.5098Z"
          fill="url(#paint0_linear_1512_4991)"
        />
        <path
          d="M32.6104 1.66016V7.58008"
          stroke="#F8FDFF"
          strokeWidth="2.66"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.6104 37.2002V43.1201"
          stroke="#F8FDFF"
          strokeWidth="2.66"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.6104 19.4297V31.3203"
          stroke="#F8FDFF"
          strokeWidth="2.66"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1512_4991"
            x1="0.0302734"
            y1="22.3901"
            x2="59.2602"
            y2="22.3901"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E28937" />
            <stop offset={1} stopColor="#FF7100" />
          </linearGradient>
        </defs>
      </svg>

      <p
        dangerouslySetInnerHTML={{ __html: text }}
        className="[&>strong]:font-bold [&>strong]:text-[#FF7711] flex flex-col font-medium"
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
    <section className="">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <CourseSectionHeading className="max-w-sm text-center text-orange-500 sm:text-left">
            Các chương trình ưu đãi hấp dẫn
          </CourseSectionHeading>
          <ul className="flex flex-col items-center gap-8 sm:items-start shrink-0 lg:flex-row">
            {promotions.map((promotion) => (
              <CoursePromotionRow key={promotion} text={promotion} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
