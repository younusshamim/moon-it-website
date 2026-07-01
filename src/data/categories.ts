import type { CategoryType } from "@/types/category";

export const categoryList: CategoryType[] = [
  {
    label: "প্রফেশনাল আইটি/কম্পিউটার কোর্স",
    icon: "/icons/it.png",
    name: "it-course",
  },
  {
    label: "ল্যাঙ্গুয়েজ কোর্স",
    icon: "/icons/language.png",
    name: "language-course",
  },
  {
    label: "এডভান্সড সার্টিফিকেট কোর্স",
    icon: "/icons/advance-course-module.png",
    name: "one-year-course",
  },
  {
    label: "ডিপ্লোমা ইন্ড্রাষ্ট্রিয়াল ট্রেনিং",
    icon: "/icons/005-practice.png",
    name: "industrial-course",
  },
];

const CATEGORIES = [
  "it-course",
  "language-course",
  "one-year-course",
  "industrial-course",
] as const;

export type CategoryName = (typeof CATEGORIES)[number];
