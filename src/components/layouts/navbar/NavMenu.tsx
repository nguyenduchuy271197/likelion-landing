"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";
import Icons from "@/components/Icons";
import NavMenuContentCard from "./NavMenuContentCard";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const courses = [
  {
    title: "Fullstack Web Development Bootcamp",
    slug: "fullstack-web-development-bootcamp",
    subtitle: "Re-usable components built using Radix UI and Tailwind CSS.",
    href: "/courses/fullstack-web-development-bootcamp",
  },
  {
    title: "Khoá học Java",
    slug: "khoa-hoc-java",
    subtitle: "Re-usable components built using Radix UI and Tailwind CSS.",
    href: "/courses/fullstack-web-development-bootcamp",
  },
  {
    title: "Khoá học Data Science - Python",
    slug: "khoa-hoc-data-science-python",
    subtitle: "Re-usable components built using Radix UI and Tailwind CSS.",
    href: "/courses/khoa-hoc-data-science-python",
  },
];

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={
              pathname.startsWith("/courses")
                ? "bg-accent text-accent-foreground"
                : ""
            }
          >
            Khoá học
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavMenuContentCard>
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="w-6 h-6" />
                    <div className="mt-4 mb-2 text-lg font-medium">
                      LIKELION
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Nơi mang lại cho các bạn các khoá học lập trình chất lượng
                      nhất!
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

              {courses.map((course) => (
                <ListItem
                  title={course.title}
                  key={course.slug}
                  href={course.href}
                >
                  {course.subtitle}
                </ListItem>
              ))}
            </NavMenuContentCard>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={
              pathname.startsWith("/roadmap")
                ? "bg-accent text-accent-foreground"
                : ""
            }
          >
            Lộ Trình
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavMenuContentCard>
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </NavMenuContentCard>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              pathname.startsWith("/blogs")
                ? "bg-accent text-accent-foreground"
                : ""
            )}
            asChild
          >
            <Link href="/blogs">Blogs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              pathname == "/about" ? "bg-accent text-accent-foreground" : ""
            )}
            asChild
          >
            <Link href="/about">Về chúng tôi</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              pathname == "/contact" ? "bg-accent text-accent-foreground" : ""
            )}
            asChild
          >
            <Link href="/contact">Liên hệ</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={href || "/"}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
