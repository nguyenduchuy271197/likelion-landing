"use client";

import Image from "next/image";
import { AspectRatio } from "../ui/AspectRatio";
import Popup from "./Popup";
import Link from "next/link";
import ktc from "/public/assets/Popup.png";

export default function NotionPopup() {
  return (
    <Popup delay={3000}>
      <Link
        href="https://ktc.likelion.edu.vn/"
        target="_blank"
        className="relative"
      >
        <AspectRatio ratio={1 / 1}>
          <Image src={ktc} alt="KTC" fill />
        </AspectRatio>
      </Link>
    </Popup>
  );
}
