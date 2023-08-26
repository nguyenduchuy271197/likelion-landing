import Link from "next/link";

const items = [
  {
    label: "Lợi ích khóa học",
    href: "#loi-ich-khoa-hoc",
  },
  {
    label: "Lộ trình",
    href: "#lo-trinh",
  },
  {
    label: "Giảng viên",
    href: "#giang-vien",
  },
  {
    label: "Dự án",
    href: "#du-an",
  },
  {
    label: "Thông tin đăng ký",
    href: "#thong-tin-dang-ky",
  },
  {
    label: "Review",
    href: "#review",
  },
];

export default function CourseNavigation() {
  return (
    <nav>
      <div className="container">
        <ul className="border-b">
          <li></li>
        </ul>
      </div>
    </nav>
  );
}
