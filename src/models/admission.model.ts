import type { BaseModel } from "./base";

export interface AdmissionModel extends BaseModel {
  name: string;
  contactNo: string;
  courseId: number;
  courseFee: number;
  address?: string;
}
