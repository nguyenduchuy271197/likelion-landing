"use client";

import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import PlayButton from "../PlayButton";

export default function CourseReviews() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h2 className="mb-6 text-2xl font-medium">
        Học viên nói gì sau khoá học?
      </h2>

      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1688551439/courses/bootcamp-lap-trinh-web-fullstack/fullstack-review_iimvot.png"
          alt=""
          fill
          className="w-full h-full brightness-75"
        />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <PlayButton size="lg" onClick={() => setOpen(true)} />
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        isOpen={open}
        videoId="qObpRdKt6Q8"
        onClose={() => setOpen(false)}
        youtube={{ autoplay: 1, mute: 1 }}
      />
    </div>
  );
}
