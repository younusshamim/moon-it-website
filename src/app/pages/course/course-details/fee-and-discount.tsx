"use client";

import { format } from "date-fns";
import { useState } from "react";
import { MdCall } from "react-icons/md";
import FormSubmittedModal from "@/components/modals/form-submitted-modal";
import NumSpan from "@/components/num-span";
import PrimaryButton from "@/components/primary-button";
import { convertToBanglaNumber } from "@/lib/utils";
import type { CourseType } from "@/types/course";
import AdmissionFormModal from "../admission-form-modal/admission-form-modal";

type PropsType = {
  course: CourseType;
};

const FeeAndDiscount = ({ course }: PropsType) => {
  const [formModal, setFormModal] = useState(false);
  const [submittedModal, setSubmittedModal] = useState(false);
  const phoneNumber = "+8801785882381";

  const { id, fee, discount } = course;
  const { type, value, endDate } = discount || {
    type: "",
    value: 0,
    endDate: "",
  };

  const generateDiscount = () => {
    const discountEndDate = endDate;
    const discountAmountText = formatDiscountAmount(type, value);
    const feeAfterDiscount = calculateFeeAfterDiscount(fee, type, value);
    return { discountEndDate, discountAmountText, feeAfterDiscount };
  };
  const { discountEndDate, discountAmountText, feeAfterDiscount } =
    generateDiscount();

  const endOfDay = new Date(discountEndDate);
  endOfDay.setHours(23, 59, 59, 999);
  const isDiscount =
    feeAfterDiscount > 0 && fee !== feeAfterDiscount && new Date() <= endOfDay;

  return (
    <div className="flex flex-col gap-3 mt-5">
      {fee > 0 && (
        <h3 className="text-2xl font-bold">
          কোর্স ফি ৳ <NumSpan>{convertToBanglaNumber(fee)}</NumSpan> টাকা
        </h3>
      )}

      <div className="flex items-center gap-2 lg:gap-4">
        <AdmissionFormModal
          isOpen={formModal}
          setIsOpen={setFormModal}
          setSubmittedModal={setSubmittedModal}
          courseId={id}
          isDiscount={isDiscount}
          feeAfterDiscount={feeAfterDiscount}
        />
        <FormSubmittedModal
          isOpen={submittedModal}
          setIsOpen={setSubmittedModal}
        />

        <PrimaryButton size="lg" onClick={() => setFormModal(true)}>
          {isDiscount ? "ডিস্কাউন্টে ভর্তি হোন" : "ডিস্কাউন্টে ভর্তি হোন"}
        </PrimaryButton>

        <a href={`tel:${phoneNumber}`}>
          <PrimaryButton
            size="lg"
            variant="outline"
            iconLeft={<MdCall className="text-primary" />}
          >
            কল করুন
          </PrimaryButton>
        </a>

        {isDiscount && (
          <h3 className="text-2xl font-bold text-primary-lighter">
            ৳ <NumSpan>{convertToBanglaNumber(feeAfterDiscount)}</NumSpan> টাকা
          </h3>
        )}
      </div>

      {isDiscount && (
        <p className="font-semibold text-[17px] text-secondary mt-1">
          [আগামী{" "}
          <NumSpan>
            {convertToBanglaNumber(
              format(new Date(discountEndDate), "dd/MM/yyyy"),
            )}
          </NumSpan>{" "}
          ইং তারিখ পর্যন্ত <NumSpan>{discountAmountText}</NumSpan> ডিস্কাউন্টে কোর্স ফি
          মাত্র ৳ <NumSpan>{convertToBanglaNumber(feeAfterDiscount)}</NumSpan>/-
          টাকা]
        </p>
      )}
    </div>
  );
};

export default FeeAndDiscount;

const calculateFeeAfterDiscount = (
  fee: number,
  type: string,
  value: number,
) => {
  if (fee === 0) return 0;
  return type === "amount" ? fee - value : fee - (fee * value) / 100;
};
const formatDiscountAmount = (type: string, value: number) => {
  return type === "amount"
    ? `${convertToBanglaNumber(value)}/-`
    : `${convertToBanglaNumber(value)}%`;
};
