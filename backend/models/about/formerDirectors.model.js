// models/ResearchCouncil.js
import mongoose from "mongoose";

const FormerDirectorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    duration_from: {
      type: String,
      required: true,
    },
    duration_to: {
      type: String,
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
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("FormerDirector", FormerDirectorsSchema);
