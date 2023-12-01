"use client";

import Image from "next/image";
import { AspectRatio } from "../ui/AspectRatio";
import Popup from "./Popup";
import Link from "next/link";

export default function NotionPopup() {
  return (
    <Popup delay={3000}>
      <Link
        href="https://www.likelion.edu.vn/forms/notion-hack-20-tuoi-va-1000-do-dau-tien"
        target="_blank"
        className="relative"
      >
        <AspectRatio ratio={1 / 1}>
          <Image
            src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1701417893/forms/notion-webinar/Pop_Up_yvj7st.jpg"
            alt="Notion Workshop | LIKELION"
            fill
          />
        </AspectRatio>
      </Link>
    </Popup>
  );
}
