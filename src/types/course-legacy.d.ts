import type { ServiceType } from "./service";

export type DiscountType = {
  type: "amount" | "percentage";
  value: number;
  endDate: string;
} | null;

export type CurriculumLessonType = {
  title: string;
  details?: string;
};
export type CurriculumModuleType = {
  title: string;
  lessons: CurriculumLessonType[];
};
export type CurriculumSectionType = {
  title: string;
  modules: CurriculumModuleType[];
};

export interface CourseType {
  id: number;
  name: string;
  slug: string;
  title: string;
  description1?: string;
  description2?: string;
  description3?: string;
  category: string;
  image: string;
  fee: number;
  discount: DiscountType;
  metorIds: number[];
  services: ServiceType[];
  curriculum?: CurriculumSectionType[];
}
