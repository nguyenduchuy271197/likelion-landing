"use client";

import YouTube, { YouTubeProps } from "react-youtube";

interface YoutubeVideoProps {
  youtubeId: string;
  title?: string;
}

export default function YoutubeVideo({ youtubeId, title }: YoutubeVideoProps) {
  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
  };
  return (
    <YouTube
      videoId={youtubeId}
      title={title}
      opts={opts}
      className="aspect-[16/9]"
    />
  );
}
