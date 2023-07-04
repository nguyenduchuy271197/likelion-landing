"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import PlayButton from "../PlayButton";
import { useState } from "react";
import ModalVideo from "react-modal-video";

interface CourseThumbnailProps {
  title: string;
  thumbnail: string;
  youtubeId?: string;
}

export default function CourseThumbnail({
  title,
  thumbnail,
  youtubeId,
}: CourseThumbnailProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative aspect-[16/9] overflow-hidden">
      <Image
        src={thumbnail}
        alt={title}
        fill
        className={cn(
          "w-full h-full object-cover object-top",
          youtubeId && "brightness-75"
        )}
      />
      {youtubeId && (
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <PlayButton onClick={() => setOpen(true)} />
        </div>
      )}
      {youtubeId && (
        <ModalVideo
          channel="youtube"
          isOpen={open}
          videoId={youtubeId}
          onClose={() => setOpen(false)}
          youtube={{ autoplay: 1, mute: 1 }}
        />
      )}
    </div>
  );
}
