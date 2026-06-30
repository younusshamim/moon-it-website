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
  name: string;
  picture: string; // e.g. "/instructors/male-instructor.png"
  highlights: string[]; // experience/education/etc. — rendered "·"-separated, no labels
};

export type Course = {
  id: string; // slug-like unique id
  name: string;
  slug: string;
  category: string; // must match a `name` in src/data/categories.ts
  briefDescription: string; // course-card text + meta description
  descriptionParagraphs: string[]; // 2–3 short paragraphs shown in hero
  thumbnail: string; // e.g. "/courses/german-language.jpg"
  youtubeUrl?: string; // optional — enables the play overlay + popup
  pricing?: CoursePricing; // used when there are NO variations
  variations?: CourseVariation[]; // used when the course has variations
  features: string[]; // core features, one line each
  curriculum?: CurriculumModule[]; // flat list of modules (no week/day labels)
  instructors?: Instructor[]; // one or more course instructors
  about: string; // rich HTML string (future: Sanity)
};
