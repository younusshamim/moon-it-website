"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ControlledSelect from "@/components/controlled-select";
import FormSubmittedModal from "@/components/modals/form-submitted-modal";
import PrimaryButton from "@/components/primary-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import attendPosibility from "@/data/attend-posibility";
import { courses } from "@/data/course-list";
import type { BaseResponseModel } from "@/models/base";
import { seminarSchema } from "@/schemas/zod/seminar.schema";
import { onJoinSeminar } from "@/services/seminar.action";

const SeminarForm = () => {
  const [submittdModal, setSubmittedModal] = useState(false);
  const [state, formAction] = useActionState<BaseResponseModel<null>, FormData>(
    onJoinSeminar,
    null,
  );
  const [submitting, setSubmitting] = useState(false);

  // hooks
  const methods = useForm<any>({
    resolver: zodResolver(seminarSchema),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = methods;

  const onSubmit = handleSubmit((data) => {
    formAction(data);
    setSubmitting(true);
  });

  useEffect(() => {
    if (!state) {
      return;
    }
    if (state.status === "success") {
      reset();
      setSubmittedModal(true);
      setSubmitting(false);
    } else if (state.status === "error") {
      setSubmitting(false);
      toast.error(state.message);
    }
  }, [reset, state]);

  //
  const searchParams = useSearchParams();
  const selectedCourseId = getValues("courseId");

  useEffect(() => {
    if (selectedCourseId) {
      const params = new URLSearchParams();
      params.set("courseId", selectedCourseId.toString());
    }
  }, [selectedCourseId]);

  // data
  const courseOptions = courses.map((course) => {
    return { label: course.name, value: course.id.toString() };
  });
  const attendPosibilityOptions = attendPosibility.map((item) => {
    return { label: item, value: item };
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 lg:grid-cols-2 gap-5"
    >
      <FormSubmittedModal
        isOpen={submittdModal}
        setIsOpen={setSubmittedModal}
      />

      <Input
        label="আপনার নাম (Only English)"
        placeholder="ইংরেজিতে আপনার নাম লিখুন"
        inputClassName="bg-white"
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
        label="কোর্স সিলেক্ট"
        placeholder="কোর্স সিলেক্ট করুন"
        name="courseId"
        options={courseOptions}
        control={control}
        error={errors.courseId?.message as string}
        defaultValue={
          courseOptions.find(
            (course) => course.value == searchParams.get("courseId"),
          )?.value
        }
        isSetParams={true}
      />
      <ControlledSelect
        label="অংশগ্রহনের সম্ভাবনা"
        placeholder="সেমিনারে অংশগ্রহনের সম্ভাবনা"
        name="attendPosibility"
        options={attendPosibilityOptions}
        control={control}
        error={errors.attendPosibility?.message as string}
      />
      <Textarea
        label="আপনার ঠিকানা"
        placeholder="আপনার ঠিকানা লিখুন"
        className="lg:col-span-2"
        inputClassName="bg-white"
        {...register("address")}
        error={errors.address?.message as string}
      />

      <div className="lg:col-span-2 flex justify-center mt-5">
        <PrimaryButton type="submit" className="px-12" disabled={submitting}>
          {submitting ? "অপেক্ষা করুন.." : "সাবমিট করুন"}
        </PrimaryButton>
      </div>
    </form>
  );
};

export default SeminarForm;
