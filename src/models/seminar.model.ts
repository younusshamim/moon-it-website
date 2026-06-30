import type { BaseModel } from "./base";

export interface SeminarModel extends BaseModel {
  name: string;
  contactNo: string;
  courseId: number;
  attendPosibility: string;
  address?: string;
}
