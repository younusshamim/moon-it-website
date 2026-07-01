"use server";

import { ZodError } from "zod";
import { getCourseBySlug } from "@/data/course-list";
import { sendAdmissionEmail } from "@/lib/email/notify-submission";
import type { BaseResponseModel } from "@/models/base";
import { writeClient } from "@/sanity/lib/write-client";
import { admissionSchema } from "@/schemas/zod/admission.schema";
import { convertToEnglishNumber } from "../lib/utils";

export const onAdmission = async (
  prevState: BaseResponseModel,
  formData: FormData,
): Promise<BaseResponseModel> => {
  try {
    const data = admissionSchema.parse(formData);

    // Resolve human-readable names from the course (slug) so the stored record
    // and email are meaningful even if the course is later edited/removed.
    const course = await getCourseBySlug(data.courseId);
    const variationName = data.variationId
      ? course?.variations?.find((v) => v.id === data.variationId)?.name
      : undefined;
    const courseFee = Number(convertToEnglishNumber(data.courseFee ?? 0));

    await writeClient.create({
      _type: "admissionSubmission",
      name: data.name,
      contactNo: data.contactNo,
      courseId: data.courseId,
      courseName: course?.name,
      variationId: data.variationId,
      variationName,
      courseFee,
      address: data.address,
    });

    // Best-effort — a failed email must not fail an already-saved submission.
    await sendAdmissionEmail({
      name: data.name,
      contactNo: data.contactNo,
      courseName: course?.name,
      variationName,
      courseFee,
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

    console.error("onAdmission error:", error);
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
};
