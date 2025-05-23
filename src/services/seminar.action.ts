"use server";

import { BaseResponseModel } from "@/models/base";
import { Seminar } from "@/schemas/mongoose/seminar.schema";
import { seminarSchema } from "@/schemas/zod/seminar.schema";
import { ZodError } from "zod";
import { connectToDatabase } from "../config/db";

export const onJoinSeminar = async (
  prevState: BaseResponseModel,
  formData: FormData
): Promise<BaseResponseModel> => {
  try {
    const data = seminarSchema.parse(formData);
    await connectToDatabase();
    const seminar = new Seminar(data);
    const result = await seminar.save();

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

export const getSeminars = async (): Promise<BaseResponseModel> => {
  try {
    await connectToDatabase();
    const seminars = await Seminar.find().sort({ createdAt: -1 });

    return {
      data: seminars,
      status: "success",
      message: "Seminars fetched successfully",
    };
  } catch (error) {
    console.log({ error });
    return {
      status: "error",
      message: "Failed to fetch seminars",
    };
  }
};
