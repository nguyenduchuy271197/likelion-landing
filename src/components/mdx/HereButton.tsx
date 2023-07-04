import Image from "next/image";
import Link from "next/link";

export default function HereButton() {
  return (
    <Link href="https://forms.gle/E1uYdwwD82XWfPpq6" target="_blank">
      <Image
        src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1688453943/blogs/buoi-hoc-thu-mien-phi-trai-nghiem-lap-trinh-web/tai-day.png"
        width={200}
        height={100}
        alt="LIKELION"
        className="transition hover:scale-105"
      />
    </Link>
  );
}
