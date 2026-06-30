import { z } from "zod";
import { englishRegex, validateContactNo } from "./common-rules";

export const admissionSchema = z.object({
  name: z
    .string()
    .min(1, { message: "নাম আবশ্যক" })
    .regex(englishRegex, { message: "নাম ইংরেজি ভাষায় হতে হবে" }),
  contactNo: validateContactNo,
  courseId: z.number({ message: "কোর্স সিলেক্ট করুন" }),
  variationId: z.string().optional(),
  courseFee: z.string().optional(),
  address: z.string().optional(),
});
