import NavMenu from "./NavMenu";
import Logo from "../../Logo";
import NavMenuMobile from "./NavMenuMobile";
import NavRegisterButton from "./NavRegisterButton";

export interface CourseType {
  id: string;
  src: string;
  title: string;
  slug: string;
  excerpt: string;
  subtitle: string;
  href: string;
  statuses: string[];
  published: boolean;
}

export const courses: CourseType[] = [
  {
    id: "6482a08d232bf6c1513a1111",
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688113875/courses/bootcamp-lap-trinh-web-fullstack/thumbnail.png",
    title: "Bootcamp lập trình web Fullstack",
    slug: "khoa-hoc-lap-trinh-web-fullstack",
    excerpt: "Trở thành lập trình viên Fullstack Bootcamp sau 3 tháng.",
    subtitle:
      "Trở thành lập trình viên phát triển website toàn diện từ Front-end đến Back-end chỉ trong 3 tháng.",
    href: "/courses/khoa-hoc-lap-trinh-web-fullstack",
    statuses: ["Full-time", "Offline", "Beginner"],
    published: true,
  },
  {
    id: "64883a8ab6a3fddba741f55e",
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688113331/courses/thanh-thao-lap-trinh-web-frond-end/thumbnail.png",
    title: "Thành thạo lập trình web Front-end",
    slug: "thanh-thao-lap-trinh-web-front-end",
    excerpt:
      "Thanh thạo kỹ năng xây dựng giao diện web, phát triển trong lĩnh vực dev web.",
    subtitle:
      "Bắt đầu sự nghiệp lập trình web Front-end với khoá học offline 3 tháng.",
    href: "/courses/thanh-thao-lap-trinh-web-front-end",
    statuses: ["Full-time", "Part-time", "Offline", "Online"],
    published: true,
  },
  // {
  //   id: "64883aacb6a3fddba741f55f",
  //   src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688113853/courses/data-science-co-ban-voi-python/thumbnail.png",
  //   title: "Data Science cơ bản với Python",
  //   slug: "data-science-co-ban-voi-python",
  //   excerpt: "Khoá học online làm quen với khoa học dữ liệu.",
  //   subtitle:
  //     "Trở thành lập trình viên Full-stack Web chỉ trong một khoá học 5 tháng. HTML, CSS, JavaScript, NodeJS, ReactJs, MongoDB.",
  //   href: "/courses/data-science-co-ban-voi-python",
  //   statuses: ["Part-time", "Online"],
  //   published: true,
  // },
  {
    id: "64df3889ac99f03faac99cee",
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1692357363/courses/khoa-hoc-python-cho-data-analysis/thumbnail_olwo74.png",
    title: "Khoá học Python cho Data Analysis",
    slug: "khoa-hoc-python-cho-data-analysis",
    excerpt:
      "Trở thành data analyst sau 3 tháng, nâng cấp kỹ năng phân tích dữ liệu.",
    subtitle:
      "Thành thạo các thao tác xử lý dữ liệu và trực quan hóa dữ liệu với Python chỉ trong 3 tháng.",
    href: "/courses/khoa-hoc-python-cho-data-analysis",
    statuses: ["Part-time", "Online"],
    published: true,
  },
  {
    id: "64df40005404ec4d4345fe36",
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1692357749/courses/khoa-hoc-back-end-php/Thumbnail_PHP300_unxiox.png",
    title: "Khoá học Back-end PHP",
    slug: "khoa-hoc-back-end-php",
    excerpt: "Nắm vững PHP trong 3 tháng, dễ dàng tìm việc trên thị trường.",
    subtitle:
      "Sử dụng thành thạo PHP, MySQL, Laravel để phát triển website đa dạng và mạnh mẽ chỉ trong 3 tháng.",
    href: "/courses/khoa-hoc-back-end-php",
    statuses: ["Part-time", "Online"],
    published: true,
  },
  {
    id: "64df41785404ec4d4345fe3a",
    src: "https://res.cloudinary.com/dbscqlwl7/image/upload/v1692357744/courses/khoa-hoc-back-end-java/Thumbnail_Java300_wmzsnf.png",
    title: "Khoá học Back-end Java",
    slug: "khoa-hoc-back-end-java",
    excerpt:
      "Lộ trình phát triển rõ ràng, tự tin theo đuổi đa lĩnh vực trong lập trình.",
    subtitle:
      "Sử dụng thành thạo Spring Framework, Spring Boot để xây dựng web một cách nhanh chóng chỉ trong 3 tháng.",
    href: "/courses/khoa-hoc-back-end-java",
    statuses: ["Part-time", "Online"],
    published: true,
  },
];

export default function Navbar() {
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
