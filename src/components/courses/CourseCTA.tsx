"use client";

import Link from "next/link";
import { Button } from "../ui/Button";
import { useContext } from "react";
import { RegisterDialogContext } from "@/context/RegisterDialogProvider";

interface CourseCTAProps {
  name: string;
  slug: string;
}

export default function CourseCTA({ name, slug }: CourseCTAProps) {
  const { setOpen: setDialogOpen } = useContext(RegisterDialogContext);
  if (!name) return null;

  return (
    <section>
      <div className="max-w-screen-lg px-8 mx-auto">
        <div className="flex flex-col items-center gap-8 px-8 py-16 rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          <h3 className="text-3xl font-bold text-center sm:text-4xl text-primary-foreground">
            Bạn cần tư vấn về khoá học{" "}
            <span className="capitalize">{name}</span>?
          </h3>
          <Button
            variant="secondary"
            className="px-8 py-4 text-base font-medium text-black transition-all duration-500 ease-in-out transform rounded-full bg-gradient-to-r from-gray-50 to-gray-200 hover:from-gray-100 hover:to-gray-300 hover:scale-105 shadow-[0_2px_10px_rgba(255,255,255,_0.7)] hover:shadow-[0_4px_20px_rgba(255,255,255,_0.7)]"
            asChild
            onClick={() => setDialogOpen(true)}
          >
            <Link
              href={{
                pathname: "/register",
                query: { course: slug },
              }}
            >
              Liên hệ tư vấn 1 : 1
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
