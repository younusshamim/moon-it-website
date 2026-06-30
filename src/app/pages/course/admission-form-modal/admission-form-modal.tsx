"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { startTransition, useActionState, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ControlledSelect from "@/components/controlled-select";
import Modal from "@/components/modal";
import PrimaryButton from "@/components/primary-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import courseList from "@/data/course-list";
import { convertToBanglaNumber } from "@/lib/utils";
import type { BaseResponseModel } from "@/models/base";
import { admissionSchema } from "@/schemas/zod/admission.schema";
import { onAdmission } from "@/services/admission.action";

type PropsTypes = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setSubmittedModal: (isOpen: boolean) => void;
  className?: string;
  feeAfterDiscount: number;
  courseId: number;
  isDiscount: boolean;
};

const AdmissionFormModal = ({
  isOpen,
  setIsOpen,
  setSubmittedModal,
  feeAfterDiscount,
  courseId,
  isDiscount,
}: PropsTypes) => {
  const [state, formAction] = useActionState<BaseResponseModel<null>, FormData>(
    onAdmission,
    null,
  );
  const [submitting, setSubmitting] = useState(false);

  const methods = useForm<any>({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      courseId,
      courseFee: convertToBanglaNumber(feeAfterDiscount),
    },
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const courseOptions = courseList.map((course) => {
    return { label: course.name, value: course.id.toString() };
  });

  const onSubmit = handleSubmit((data) => {
    startTransition(() => {
      formAction(data);
    });
    setSubmitting(true);
  });

  useEffect(() => {
    if (!state) {
      return;
    }
    if (state.status === "success") {
      reset();
      setIsOpen(false);
      setSubmitting(false);
      setSubmittedModal(true);
    } else if (state.status === "error") {
      setSubmitting(false);
      toast.error(state.message);
    }
  }, [reset, setIsOpen, setSubmittedModal, state]);

  const isActiveCourseFeeField = feeAfterDiscount > 0;

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-12 px-0 lg:px-10 py-5">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/logo/logo.png"
            alt="Moon IT"
            className="w-[150px] h-auto object-contain mb-7"
            height={0}
            width={0}
            sizes="100vw"
          />
          <h1 className="text-3xl font-extrabold text-primary mb-3 lg:mb-1">
            {/* নিচের ফর্মটি সঠিক তথ্য দিয়ে পূরণ করুন */}
            ডিস্কাউন্টে ভর্তি হতে নিচের ফর্মটি পূরণ করুন
          </h1>
          <h3 className="font-medium w-4/5 lg:w-full">
            {/* ফর্মটি পূরণ করার পর আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন। */}
            ফর্মটি পূরণের পর আমাদের প্রতিনিধি শীঘ্রই আপনার সঙ্গে ডিস্কাউন্টে ভর্তি বিষয়ে
            যোগাযোগ করবে।
          </h3>
        </div>

        <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4 lg:gap-5">
          <Input
            label="আপনার নাম (Only English)"
            placeholder="ইংরেজিতে আপনার নাম লিখুন"
            {...register("name")}
            error={errors.name?.message as string}
          />
          <Input
            label="ফোন নাম্বার (Only English)"
            placeholder="ইংরেজিতে ফোন নাম্বার লিখুন"
            {...register("contactNo")}
            error={errors.contactNo?.message as string}
          />
          <ControlledSelect
            label="যে কোর্সটি করতে চাচ্ছেন"
            placeholder="যে কোর্সটি করতে চাচ্ছেন"
            name="courseId"
            options={courseOptions}
            control={control}
            error={errors.courseId?.message as string}
            inputClassName="disabled:opacity-100"
            className={isActiveCourseFeeField ? "col-span-2" : "col-span-2"}
            disabled
          />
          {/* <Input
            label={isDiscount ? "ডিস্কাউন্টে কোর্স ফি" : "কোর্স ফি"}
            inputClassName="disabled:opacity-100 font-sans"
            className={isActiveCourseFeeField ? "block" : "hidden"}
            disabled
            {...register("courseFee")}
            error={errors.courseFee?.message as string}
          /> */}
          <Textarea
            label="আপনার ঠিকানা"
            placeholder="আপনার ঠিকানা লিখুন"
            className="col-span-2"
            {...register("address")}
            error={errors.address?.message as string}
          />

          <PrimaryButton
            type="submit"
            className="col-span-2 mt-5"
            disabled={submitting}
          >
            {submitting ? "অপেক্ষা করুন.." : "সাবমিট করুন"}
          </PrimaryButton>
        </form>
      </div>
    </Modal>
  );
};

export default AdmissionFormModal;
