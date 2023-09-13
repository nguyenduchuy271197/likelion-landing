"use client";

import { useClipboard } from "@mantine/hooks";
import ClipboardButton from "../ClipboardButton";
import { removeSpace } from "@/lib/utils";

export default function PaymentAccountRow({
  label,
  value,
  clipboard = false,
  space = true,
}: {
  label: string;
  value: string;
  clipboard?: boolean;
  space?: boolean;
}) {
  const { copied, copy } = useClipboard({ timeout: 500 });

  return (
    <div className="relative p-4 space-y-1 rounded-lg bg-primary text-primary-foreground">
      <h5 className="text-sm">{label}</h5>
      <div className="flex items-center justify-between gap-8 h-9">
        <p className="text-lg font-medium">{value}</p>
        {clipboard && (
          <ClipboardButton
            copied={copied}
            onClick={() => copy(space ? value : removeSpace(value))}
          />
        )}
      </div>
    </div>
  );
}
