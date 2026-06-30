import { convertToBanglaNumber } from "@/lib/utils";
import type { CourseDiscount, CoursePricing } from "@/types/course";

export const calculateFeeAfterDiscount = (
  fee: number,
  discount?: CourseDiscount,
) => {
  if (!discount || fee <= 0) return fee;
  return discount.type === "amount"
    ? fee - discount.value
    : fee - (fee * discount.value) / 100;
};

export const formatDiscountAmount = (discount: CourseDiscount) => {
  return discount.type === "amount"
    ? `৳${convertToBanglaNumber(discount.value)}/-`
    : `${convertToBanglaNumber(discount.value)}%`;
};

export type EffectivePrice = {
  fee: number;
  feeAfterDiscount: number;
  isDiscountActive: boolean;
  discount?: CourseDiscount;
};

export const getEffectivePrice = (pricing: CoursePricing): EffectivePrice => {
  const { fee, discount } = pricing;
  const feeAfterDiscount = calculateFeeAfterDiscount(fee, discount);

  let isDiscountActive = false;
  if (discount && feeAfterDiscount > 0 && feeAfterDiscount < fee) {
    const endOfDay = new Date(discount.endDate);
    endOfDay.setHours(23, 59, 59, 999);
    isDiscountActive = new Date() <= endOfDay;
  }

  return { fee, feeAfterDiscount, isDiscountActive, discount };
};
