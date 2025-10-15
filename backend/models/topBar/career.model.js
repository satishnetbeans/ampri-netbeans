// models/career.js
import mongoose from "mongoose";

const CareerSchema = new mongoose.Schema(
  {
    Positions: {
      type: String,
      required: true,
    },
    ProjectStaff: [
      {
        name: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
    DetailnApplication: [
      {
        name: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
    Notifications: [
      {
        name: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
    ShortlistedCandidates: [
      {
        name: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
    Result: [
      {
        name: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
    tab: {
      type: String,
      enum: ["Project Staff Positions", "Permanent Positions" ,"Project Staff Positions-Archive"],
      required: true,
    },
    table: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TablePage",
      required: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Career", CareerSchema);
