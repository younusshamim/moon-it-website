"use server";

import { BaseResponseModel } from "@/models/base";
import { admissionSchema } from "@/schemas/zod/admission.schema";
import { ZodError } from "zod";
import { connectToDatabase } from "../config/db";
import { convertToEnglishNumber } from "../lib/utils";
import { Admission } from "../schemas/mongoose/admission.schema";

export const onAdmission = async (
  prevState: BaseResponseModel,
  formData: FormData
): Promise<BaseResponseModel> => {
  try {
    const data = admissionSchema.parse(formData);
    const newData = {
      ...data,
      courseFee: Number(convertToEnglishNumber(data.courseFee ?? 0)),
    };

    await connectToDatabase();
    const admission = new Admission(newData);
    const result = await admission.save();

    return {
      data: result,
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

    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
};

// console.log("actionData", newData);
// revalidatePath(routes.home());
// revalidateTag('contact');
// redirect(routes.contactId({ contactId }));

export const deleteAllAdmissions = async (
  prevState: BaseResponseModel,
  formData: FormData
): Promise<BaseResponseModel> => {
  try {
    await connectToDatabase();
    const result = await Admission.deleteMany({});

    if (result.deletedCount === 0) {
      return {
        status: "success",
        message: "No admissions found to delete.",
      };
    }

    return {
      status: "success",
      message: `Successfully deleted all admissions. Total deleted: ${result.deletedCount}`,
    };
  } catch (error) {
    console.error("Error in deleteAllAdmissions:", error);

    return {
      status: "error",
      message:
        "An error occurred while trying to delete all admissions. Please try again.",
    };
  }
};

export const getAdmissions = async (): Promise<BaseResponseModel> => {
  try {
    await connectToDatabase();
    const admissions = await Admission.find().sort({ createdAt: -1 });

    return {
      data: admissions,
      status: "success",
      message: "Admissions fetched successfully",
    };
  } catch (error) {
    console.log({ error });
    return {
      status: "error",
      message: "Failed to fetch admissions",
    };
  }
};
