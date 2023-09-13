import { Button, ButtonProps } from "./ui/Button";
import { Check, Copy } from "lucide-react";

interface ClipboardButtonProps extends ButtonProps {
  copied: boolean;
}

export default function ClipboardButton({
  copied,
  onClick,
  ...props
}: ClipboardButtonProps) {
  return (
    <Button variant="ghost" size="sm" onClick={onClick} {...props}>
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    </Button>
  );
}
