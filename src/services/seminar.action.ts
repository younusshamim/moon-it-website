"use server";

import { ZodError } from "zod";
import { getCourseBySlug } from "@/data/course-list";
import { sendSeminarEmail } from "@/lib/email/notify-submission";
import type { BaseResponseModel } from "@/models/base";
import { writeClient } from "@/sanity/lib/write-client";
import { seminarSchema } from "@/schemas/zod/seminar.schema";

export const onJoinSeminar = async (
  prevState: BaseResponseModel,
  formData: FormData,
): Promise<BaseResponseModel> => {
  try {
    const data = seminarSchema.parse(formData);

    // Resolve the course name from its slug for a readable record + email.
    const course = await getCourseBySlug(data.courseId);

    await writeClient.create({
      _type: "seminarSubmission",
      name: data.name,
      contactNo: data.contactNo,
      courseId: data.courseId,
      courseName: course?.name,
      attendPosibility: data.attendPosibility,
      address: data.address,
    });

    // Best-effort — a failed email must not fail an already-saved submission.
    await sendSeminarEmail({
      name: data.name,
      contactNo: data.contactNo,
      courseName: course?.name,
      attendPosibility: data.attendPosibility,
      address: data.address,
    });

    return {
      status: "success",
      message: `Welcome, Your form submitted successfully!`,
    };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        status: "error",
        message: "Invalid form data",
      };
    }

    console.error("onJoinSeminar error:", error);
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
};
