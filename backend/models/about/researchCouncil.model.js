// models/ResearchCouncil.js
import mongoose from "mongoose";

const ResearchCouncilSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    Affiliation: {
      type: String,
      required: true,
    },
    Position: {
      type: String,
      required: true,
    },
    SNo: {
      type: String,
      default: "",
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

export default mongoose.model("ResearchCouncil", ResearchCouncilSchema);
