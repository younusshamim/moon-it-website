"use client";

import { format } from "date-fns";
import { useState } from "react";
import { MdCall } from "react-icons/md";
import FormSubmittedModal from "@/components/modals/form-submitted-modal";
import NumSpan from "@/components/num-span";
import PrimaryButton from "@/components/primary-button";
import { convertToBanglaNumber } from "@/lib/utils";
import type { CourseType } from "@/types/course-legacy";

import AdmissionFormModal from "../admission-form-modal/admission-form-

l";

type PropsT
e = {
  course: Cour
Ty


};

const FeeAndDiscount = ({ course }: PropsTyp
 => {
  const [formModal, setFormModal] = useState(
lse);
  const [submittedModal, setSubmittedModal] = useState(
lse);
  const phoneNumber = "+88017858

1";

  const { id, fee, discount } = 
urse;
  const { type, value, endDate } = discou
 || {
    ty
: "",
    va
e: 0,
    endDa
: ""

 };

  const generateDiscount = 
 => {
    const discountEndDate = e
Date;
    const discountAmountText = formatDiscountAmount(type, 
lue);
    const feeAfterDiscount = calculateFeeAfterDiscount(fee, type, 
lue);
    return { discountEndDate, discountAmountText, feeAfterDisc
nt }

  };
  const { discountEndDate, discountAmountText, feeAfterDisco
t } =
    generateDisc

();

  const endOfDay = new Date(discountEn
ate);
  endOfDay.setHours(23, 59, 59
999);
  const isDis
unt =
    feeAfterDiscount > 0 && fee !== feeAfterDiscount && new Date() <= en

ay;

  r
urn (
    <div className="flex flex-col gap-3
t-5">
      {fee >
 && (
        <h3 className="text-2xl font
old">
          কোর্স ফি ৳ <NumSpan>{convertToBanglaNumber(fee)}</NumSpan> টাক
া
      
</h3>
 

 )}

      <div className="flex items-center gap-2 lg:
p-4">
        <AdmissionFo
Modal
          isOpen={for
odal}
          setIsOpen={setFor
odal}
          setSubmittedModal={setSubmitte
odal}
          course
={id}
          isDiscount={isDi
ount}
          feeAfterDiscount={feeAfterDi
ount}
   
   />
        <FormSubmitt
Modal
          isOpen={submitte
odal}
          setIsOpen={setSubmitte
odal}
   

 />

        <PrimaryButton size="lg" onClick={() => setFormModal(
ue)}>
          {isDiscount ? "ডিস্কাউন্টে ভর্তি হোন" : "ডিস্কাউন্টে ভর্তি হো
ন"}
        </Primary

on>

        <a href={`tel:${phoneNum
r}`}>
          <Primar
utton
            si
="lg"
            variant="o
line"
            iconLeft={<MdCall className="text-prima
" />}
    
    >
            কল করু
ন
          </Primary
tton>
     

/a>

        {isDiscou
 && (
          <h3 className="text-2xl font-bold text-primary-li
ter">
            ৳ <NumSpan>{convertToBanglaNumber(feeAfterDiscount)}</NumSpan> টাক
া
        
</h3>
   
   )}
     

iv>

      {isDiscou
 && (
        <p className="font-semibold text-[17px] text-secondary
t-1">
          [আগামী
{" "}
          <N
Span>
            {convertToBangla
mber(
              format(new Date(discountEndDate), "dd/MM/
yy"),
       
   )}
          </NumSpa
{" "}
          ইং তারিখ পর্যন্ত <NumSpan>{discountAmountText}</NumSpan> ডিস্কাউন্টে কোর্স
ি
          মাত্র ৳ <NumSpan>{convertToBanglaNumber(feeAfterDiscount)}</Num
an>/-
          টা
]
     
 </p>
 
   )}
   
/div

 


};

export default FeeAndDi

nt;

const calculateFeeAfterDisco
t = (
  fee: 
mber,
  type: 
ring,
  value: 
mber,
 => {
  if (fee === 0) re
rn 0;
  return type === "amount" ? fee - value : fee - (fee * value)
 1
;
};
const formatDiscountAmount = (type: string, value: numbe
 => {
  return type === "
ount"
    ? `${convertToBanglaNumber(val
)}/-`
    : `${convertToBanglaNumber(val
)}
;
};
