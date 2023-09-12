"use client";

import { Button } from "./ui/Button";
import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

export default function ClipboardButton() {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => setIsCopied(false), 750);
    }
  }, [isCopied]);

  return (
    <Button variant="ghost" size="sm" onClick={() => setIsCopied(true)}>
      {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    </Button>
  );
}
