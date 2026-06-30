import { z } from "zod";

export const fileSchema = z.object({
  name: z.string(),
  url: z.string(),
  size: z.number(),
});

export type FileSchema = z.infer<typeof fileSchema>;

export const stingNullableOptional = z.string().nullable().optional();
export const numberOptional = z.coerce
  .number({ message: "Must be a number" })
  .optional();

export const validateEmail = z
  .string()
  .min(1, { message: "ইমেইল এড্রেস আবশ্যক" })
  .email({ message: "ইনভেলিড ইমেইল এড্রেস" });

export const validateOptionalEmail = validateEmail.or(z.literal("").optional());

export const validateContactNo = z
  .string()
  .min(1, { message: "ফোন নাম্বার আবশ্যক" })
  .refine(
    (val: string) => {
      const regex = /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/;
      return regex.test(val);
    },
    { message: "ইনভেলিড ফোন নাম্বার" },
  );
export const validateOptionalContactNo = validateContactNo.or(
  z.literal("").optional(),
);

export const englishRegex = /^[A-Za-z\s]+$/;
export const banglaRegex = /^[\u0980-\u09FF]+$/;
