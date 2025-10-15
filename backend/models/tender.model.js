// models/technologyKnowHow.js
import mongoose from "mongoose";

const tenderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    document: [
      {
        name: { type: String, required: true },
        url: { type: String, required: true },
      }
    ],
    lastDate: {
      type: String,
      required: true,
    },
    openingDate: {
      type: String,
      required: true,
    },
    tab: {
      type: String,
      enum: [
        "latest tenders (2025-26)",
        "tenders 2024-25",
        "tenders 2023-24",
        "tender Archive",
      ],
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

export default mongoose.model("tender", tenderSchema);
