import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToBanglaNumber(englishNumber: number | string) {
  const englishToBanglaMap: { [key: string]: string } = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };
  const numberString = englishNumber.toString();
  const banglaNumber = numberString
    .split("")
    .map((char) => englishToBanglaMap[char] || char)
    .join("");
  return banglaNumber;
}

export function convertToEnglishNumber(banglaNumber: number | string) {
  const banglaToEnglishMap: { [key: string]: string } = {
    "০": "0",
    "১": "1",
    "২": "2",
    "৩": "3",
    "৪": "4",
    "৫": "5",
    "৬": "6",
    "৭": "7",
    "৮": "8",
    "৯": "9",
  };
  const numberString = banglaNumber.toString();
  const englishNumber = numberString
    .split("")
    .map((char) => banglaToEnglishMap[char] || char)
    .join("");
  return englishNumber;
}
