// models/ResearchCouncil.js
import mongoose from "mongoose";

const ManagementCouncilSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    Affiliation: {
      type: String,
    },
    Position: {
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

export default mongoose.model("ManagementCouncil", ManagementCouncilSchema);
