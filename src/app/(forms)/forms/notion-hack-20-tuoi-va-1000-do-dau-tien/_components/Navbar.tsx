import Link from "next/link";
import { Button } from "./Button";
import Logo from "@/components/Logo";
import { ROUTES } from "./constants";
import NavList from "./NavList";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 backdrop-blur-sm shadow-navbar bg-background/90">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Nav */}
          <NavList />

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* <ImageViewer /> */}
            <div className="hidden sm:block">
              <Button className="w-full" size="sm" asChild>
                <Link href="#form">Đăng ký ngay</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
