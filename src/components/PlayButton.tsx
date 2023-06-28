import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./ui/Button";
import { PlayIcon } from "lucide-react";
import React from "react";

type PlayButtonProps = Omit<ButtonProps, "size"> &
  React.RefAttributes<HTMLButtonElement> & {
    size?: "md" | "lg";
  };

export default function PlayButton({ size = "md", ...props }: PlayButtonProps) {
  return (
    <Button
      className={cn(
        "w-12 h-12 rounded-full",
        size === "lg" && "w-20 h-20",
        props.className
      )}
      variant="secondary"
      {...props}
    >
      <PlayIcon fill="#000" size={size === "lg" ? 32 : 24} />
    </Button>
  );
}
