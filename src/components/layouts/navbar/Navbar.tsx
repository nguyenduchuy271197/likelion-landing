import Link from "next/link";
import NavMenu from "./NavMenu";
import { Button, buttonVariants } from "../../ui/Button";
import Icons from "../../Icons";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/Sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import Logo from "../../Logo";
import RegisterButton from "@/components/common/register/RegisterButton";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-10 shadow-navbar bg-background/90 min-h-navbar backdrop-blur-sm h-fit">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Logo />

          {/* Nav */}
          <NavMenu />

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <Button className="w-full" asChild>
                <Link href="/register">Đăng ký ngay</Link>
              </Button>
            </div>
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
                      <ul className="flex flex-col gap-3 py-2 pl-4 ml-2 text-base font-normal border-l border-border text-muted-foreground">
                        <li>
                          <Link
                            href="#"
                            className="block w-full p-2 hover:text-accent-foreground"
                          >
                            Frontend
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="block w-full p-2 hover:text-accent-foreground"
                          >
                            Backend
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="block w-full p-2 hover:text-accent-foreground"
                          >
                            Python
                          </Link>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Roadmap</AccordionTrigger>
                    <AccordionContent>
                      Yes. It comes with default styles that matches the other
                      components aesthetic.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Blogs</AccordionTrigger>
                    <AccordionContent>
                      Yes. Its animated by default, but you can disable it if
                      you prefer.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <SheetFooter className="mx-auto mt-6">
                  <RegisterButton />
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
