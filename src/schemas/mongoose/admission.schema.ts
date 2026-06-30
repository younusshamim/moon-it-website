import mongoose from "mongoose";

const AdmissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      max: 50,
    },
    contactNo: {
      type: String,
      required: true,
      max: 15,
    },
    courseId: {
      type: Number,
      required: true,
    },
    courseFee: {
      type: Number,
      required: false,
    },
    address: {
      type: String,
      required: false,
      max: 100,
    },
  },
  { timestamps: true },
);

export const Admission =
  mongoose.models?.Admission || mongoose.model("Admission", AdmissionSchema);
