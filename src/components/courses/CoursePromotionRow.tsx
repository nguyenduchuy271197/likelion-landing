"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";
import { useContext } from "react";
import { RegisterDialogContext } from "@/context/RegisterDialogProvider";
import { Promotion } from "./CoursePromotion";

export default function CoursePromotionRow({
  promotion,
  slug,
}: {
  promotion: Promotion;
  slug: string;
}) {
  const { setOpen: setDialogOpen } = useContext(RegisterDialogContext);

  return (
    <li className="text-sm transition-all border border-orange-500 rounded-lg group">
      <Link
        href={`/register?course=${slug}`}
        className="flex flex-col gap-4 px-4 py-4 sm:px-8 sm:flex-row sm:items-center sm:gap-8"
        onClick={() => setDialogOpen(true)}
      >
        <div className="flex items-center justify-between gap-8">
          <svg
            viewBox="0 0 60 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-orange-500 -rotate-45 sm:h-16 sm:w-16"
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
          <Link
            href={`/register?course=${slug}`}
            className="flex items-center gap-2 text-orange-500 cursor-pointer sm:hidden"
          >
            Dùng ngay
            <MoveRight
              className="w-4 h-4 transition-all group-hover:translate-x-1"
              strokeWidth={3}
            />
          </Link>
        </div>

        <div className="space-y-1 font-bold grow">
          <div className="flex items-center justify-between gap-8">
            <p>{promotion.prefix}</p>
            <Link
              href=""
              className="items-center hidden gap-2 text-orange-500 cursor-pointer sm:flex"
              onClick={() => setDialogOpen(true)}
            >
              Dùng ngay
              <MoveRight
                className="w-4 h-4 transition-all group-hover:translate-x-1"
                strokeWidth={3}
              />
            </Link>
          </div>
          <p className="text-3xl font-bold text-orange-500">
            {promotion.value}
          </p>
          <p>{promotion.postfix}</p>
          {promotion.note && <p className="text-xs">*{promotion.note}</p>}
        </div>
      </Link>
    </li>
  );
}
