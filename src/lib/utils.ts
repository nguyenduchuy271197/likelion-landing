import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateNumberSequence(n: number) {
  return Array.from({ length: n }, (_, index) => index + 1);
}

export function formatNumber(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function removeSpace(text: string) {
  return text.replace(/\s+/g, "");
}
