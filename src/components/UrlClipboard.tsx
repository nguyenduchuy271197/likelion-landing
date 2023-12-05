"use client";

import { useEffect, useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import { Input } from "./ui/Input";

export default function UrlClipboard({ url }: { url: string }) {
  const [_, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let timeId: NodeJS.Timeout | undefined;
    if (isCopied) {
      timeId = setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }

    return () => clearTimeout(timeId);
  }, [isCopied]);
  return (
    <div className="relative p-1 border">
      <Input
        className="pr-20 overflow-scroll border-0 line-clamp-1"
        value={url}
        disabled
      />
      <button
        className="absolute font-bold -translate-y-1/2 right-4 top-1/2"
        onClick={() => {
          copy(url);
          setIsCopied(true);
        }}
      >
        {isCopied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
