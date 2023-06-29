import Logo from "@/components/Logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/Sheet";
import Link from "next/link";
import { CourseType } from "./Navbar";
import Icons from "@/components/Icons";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavMenuMobile({ courses }: { courses: CourseType[] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="lg:hidden">
          <Icons.menu />
        </Button>
      </SheetTrigger>

      {/* Mobile Nav */}
      <SheetContent
        position="left"
        size="lg"
        className="max-w-[400px] w-full flex flex-col py-10"
      >
        <SheetHeader>
          <div className="h-[100px] w-full flex items-center justify-center">
            <Logo />
          </div>
        </SheetHeader>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Khoá học</AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-3 py-2 pl-4 ml-2 text-base font-normal border-l-2 border-border text-muted-foreground">
                {courses.map((course) => (
                  <li key={course.title}>
                    <SheetClose asChild>
                      <Link
                        href={course.href}
                        className={cn(
                          "block w-full p-2 hover:text-accent-foreground",
                          !course.published &&
                            "pointer-events-none opacity-30 text-primary"
                        )}
                      >
                        {course.title} {!course.published && "(Coming soon...)"}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <SheetClose asChild>
              <Link
                href="/blogs"
                className="py-4 font-medium transition-all hover:underline"
              >
                Blogs
              </Link>
            </SheetClose>
          </AccordionItem>
          <AccordionItem value="item-2">
            <SheetClose asChild>
              <Link
                href="/about"
                className="py-4 font-medium transition-all hover:underline"
              >
                Về chúng tôi
              </Link>
            </SheetClose>
          </AccordionItem>
          <AccordionItem value="item-3">
            <SheetClose asChild>
              <Link
                href="/contact"
                className="py-4 font-medium transition-all hover:underline"
              >
                Liên hệ
              </Link>
            </SheetClose>
          </AccordionItem>
          <AccordionItem value="item-4">
            <SheetClose asChild>
              <Link
                href="/faq"
                className="py-4 font-medium transition-all hover:underline"
              >
                FAQs
              </Link>
            </SheetClose>
          </AccordionItem>
        </Accordion>
        <SheetFooter className="mx-auto mt-6">
          <SheetClose asChild>
            <Button className="w-full" asChild>
              <Link href="/register">Đăng ký ngay</Link>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
