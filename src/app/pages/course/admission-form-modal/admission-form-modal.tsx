"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { startTransition, useActionState, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useCourseOptions } from "@/app/shared/course-options/course-options-context";
import ControlledSelect from "@/components/controlled-select";
import Modal from "@/components/modal";
import PrimaryButton from "@/components/primary-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { convertToBanglaNumber } from "@/lib/utils";
import { getEffectivePrice } from "@/lib/utils/pricing";
import type { BaseResponseModel } from "@/models/base";
import { admissionSchema } from "@/schemas/zod/admission.schema";
import { onAdmission } from "@/services/admission.action";
import type { CourseOption } from "@/types/course";

type PropsTypes = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setSubmittedModal: (isOpen: boolean) => void;
  className?: string;
  /** Legacy admission course id of the course the user enrolled from. */
  initialCourseId: string;
  /** Pre-selected variation id, when the course has variations. */
  initialVariationId?: string;
};

const findCourse = (courses: CourseOption[], courseId?: string) =>
  courses.find((course) => course.id === courseId);

/** Resolves the effective fee (after discount) for a course + variation. */
const resolveFee = (
  courses: CourseOption[],
  courseId?: string,
  variationId?: string,
) => {
  const course = findCourse(courses, courseId);
  if (!course) return undefined;
  const pricing = course.variations?.length
    ? course.variations.find((v) => v.id === variationId)?.pricing
    : course.pricing;
  if (!pricing) return undefined;
  return getEffectivePrice(pricing).feeAfterDiscount;
};

const AdmissionFormModal = ({
  isOpen,
  setIsOpen,
  setSubmittedModal,
  initialCourseId,
  initialVariationId,
}: PropsTypes) => {
  const [state, formAction] = useActionState<BaseResponseModel<null>, FormData>(
    onAdmission,
    null,
  );
  const [submitting, setSubmitting] = useState(false);
  const courses = useCourseOptions();

  const initialFee = resolveFee(courses, initialCourseId, initialVariationId);

  const methods = useForm<any>({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      courseId: initialCourseId,
      variationId: initialVariationId,
      courseFee:
        initialFee !== undefined ? convertToBanglaNumber(initialFee) : "",
    },
  });

  const {
    register,
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  // The modal stays mounted while the user changes packages outside it, so
  // `defaultValues` (captured once) goes stale. Re-seed the form from the
  // latest pre-selection every time the modal opens.
  useEffect(() => {
    if (!isOpen) return;
    const fee = resolveFee(courses, initialCourseId, initialVariationId);
    reset({
      courseId: initialCourseId,
      variationId: initialVariationId,
      courseFee: fee !== undefined ? convertToBanglaNumber(fee) : "",
    });
  }, [isOpen, initialCourseId, initialVariationId, courses, reset]);

  const selectedCourseId = watch("courseId");
  const selectedVariationId = watch("variationId");

  const selectedCourse = findCourse(courses, selectedCourseId);
  const variations = selectedCourse?.variations ?? [];

  const courseOptions = courses.map((course) => ({
    label: course.name,
    value: course.id.toString(),
  }));

  const variationOptions = variations.map((variation) => ({
    label: variation.name,
    value: variation.id,
  }));

  // Keep the variation selection valid for the current course, then sync the
  // (read-only) fee field to the resolved course + variation pricing.
  useEffect(() => {
    if (!variations.length) {
      if (selectedVariationId) setValue("variationId", undefined);
    } else if (!variations.some((v) => v.id === selectedVariationId)) {
      setValue("variationId", variations[0].id);
      return; // wait for the corrected variation to re-run this effect
    }

    const fee = resolveFee(courses, selectedCourseId, selectedVariationId);
    setValue("courseFee", fee !== undefined ? convertToBanglaNumber(fee) : "");
  }, [courses, selectedCourseId, selectedVariationId, variations, setValue]);

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
            ভর্তি হতে নিচের ফর্মটি পূরণ করুন
          </h1>
          <h3 className="font-medium w-4/5 lg:w-full">
            ফর্মটি পূরণের পর আমাদের প্রতিনিধি শীঘ্রই আপনার সঙ্গে ভর্তি বিষয়ে যোগাযোগ
            করবে।
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
            label="ফোন নাম্বার (Only English)"
            placeholder="ইংরেজিতে ফোন নাম্বার লিখুন"
            {...register("contactNo")}
            error={errors.contactNo?.message as string}
          />
          <ControlledSelect
            label="যে কোর্সটি করতে চাচ্ছেন"
            placeholder="কোর্স বাছাই করুন"
            name="courseId"
            options={courseOptions}
            control={control}
            error={errors.courseId?.message as string}
            className={variationOptions.length ? "col-span-1" : "col-span-2"}
          />
          {variationOptions.length > 0 && (
            <ControlledSelect
              label="লেভেল / প্যাকেজ"
              placeholder="লেভেল বাছাই করুন"
              name="variationId"
              options={variationOptions}
              control={control}
              error={errors.variationId?.message as string}
              className="col-span-1"
            />
          )}
          <Input
            label="কোর্স ফি"
            inputClassName="disabled:opacity-100 font-sans"
            className="col-span-2"
            disabled
            {...register("courseFee")}
            error={errors.courseFee?.message as string}
          />
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
