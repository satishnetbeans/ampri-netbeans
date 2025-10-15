import mongoose from "mongoose";

const visionMandateSchema = new mongoose.Schema(
  {
    vision: {
      type: String,
      required: true,
      trim: true,
    },
    mandate: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("VisionMandate", visionMandateSchema);
