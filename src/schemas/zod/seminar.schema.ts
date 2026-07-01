import { z } from "zod";
import { englishRegex, validateContactNo } from "./common-rules";

export const seminarSchema = z.object({
  name: z
    .string()
    .min(1, { message: "নাম আবশ্যক" })
    .regex(englishRegex, { message: "নাম ইংরেজি ভাষায় হতে হবে" }),
  contactNo: validateContactNo,
  courseId: z.string().min(1, { message: "কোর্স সিলেক্ট করুন" }),
  attendPosibility: z.string({ message: "সিলেক্ট করুন" }),
  address: z.string().optional(),
});
