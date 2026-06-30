import type { CategoryType } from "@/types/category";

const categories: CategoryType[] = [
  {
    label: "প্রফেশনাল আইটি/কম্পিউটার কোর্স",
    icon: "/icons/it.png",
    name: "it",
  },
  { label: "ল্যাঙ্গুয়েজ কোর্স", icon: "/icons/language.png", name: "language" },
  {
    label: "এডভান্সড সার্টিফিকেট কোর্স",
    icon: "/icons/advance-course-module.png",
    name: "advanced",
  },
  {
    label: "ডিপ্লোমা ইন্ড্রাষ্ট্রিয়াল ট্রেনিং",
    icon: "/icons/005-practice.png",
    name: "industrial",
  },
];

export default categories;
