import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateNumberSequence(n: number) {
  return Array.from({ length: n }, (_, index) => index + 1);
}
