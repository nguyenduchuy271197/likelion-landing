import NavMenu from "./NavMenu";
import Logo from "../../Logo";
import NavMenuMobile from "./NavMenuMobile";
import NavRegisterButton from "./NavRegisterButton";
import { ICourse } from "@/types";

export default function Navbar({ courses }: { courses: ICourse[] }) {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 min-h-navbar backdrop-blur-sm h-fit shadow-navbar bg-background/90 ">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Logo />

          {/* Nav */}
          <NavMenu courses={courses} />

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* <ImageViewer /> */}
            <div className="hidden sm:block">
              <NavRegisterButton />
            </div>

            <NavMenuMobile courses={courses} />
          </div>
        </div>
      </div>
    </nav>
  );
}
