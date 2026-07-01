import type { PortableTextBlock } from "@portabletext/types";
import { CategoryName } from "@/data/categories";

export type CourseDiscount = {
  type: "amount" | "percentage";
  value: number;
  endDate: string; // "MM/DD/YYYY" — matches the legacy date parsing format
};

export type CoursePricing = {
  fee: number;
  discount?: CourseDiscount;
};

export type CourseVariation = {
  id: string; // e.g. "a1"
  name: string; // e.g. "লেভেল A1"
  subtitle?: string; // short single-line note (duration etc.)
  recommended?: boolean; // highlights the chip as the suggested pick
  pricing: CoursePricing;
};

export type CurriculumModule = {
  title: string; // e.g. "মৌলিক ভিত্তি ও উচ্চারণ"
  topics: string[]; // topics/skills covered in this module
};

export type Instructor = {
  id?: string; // slug — stable identifier from Sanity
  name: string;
  picture: string; // resolved image URL (Sanity CDN)
  highlights: string[]; // experience/education/etc. — rendered "·"-separated, no labels
};

export type Course = {
  _id?: string; // Sanity document id
  id: string; // slug — used as the admission/enrollment identifier
  name: string;
  slug: string;
  category: CategoryName; // must match a `name` in src/data/categories.ts
  briefDescription: string; // course-card text + meta description
  descriptionParagraphs?: string[]; // 2–3 short paragraphs shown in hero
  thumbnail: string; // resolved image URL (Sanity CDN)
  youtubeUrl?: string; // optional — enables the play overlay + popup
  priceModel?: "single" | "variations";
  pricing?: CoursePricing | null; // used when there are NO variations
  variations?: CourseVariation[]; // used when the course has variations
  features?: string[]; // core features, one line each
  curriculum?: CurriculumModule[]; // flat list of modules (no week/day labels)
  instructors?: Instructor[]; // one or more course instructors
  about?: PortableTextBlock[]; // rich text (Portable Text) from Sanity
  isAffiliated?: boolean; // whether the course is affiliated with a partner organization
};

/** Lightweight course shape used by the admission + seminar dropdowns. */
export type CourseOption = {
  id: string;
  name: string;
  priceModel?: "single" | "variations";
  pricing?: CoursePricing | null;
  variations?: Pick<CourseVariation, "id" | "name" | "pricing">[];
};
