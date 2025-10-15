// models/MOU.js
import mongoose from "mongoose";

const MOUSchema = new mongoose.Schema(
  {
    Country: {
      type: String,
      required: true,
    },
    CompanyAgencyName: {
      type: String,
      required: true,
    },
    description: {
      type: String
    },
    Validity: {
      type: String
    },
    commencementDate: {
      type: String
    },
    tab: {
      type: String,
      enum: ["National", "International"],
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

export default mongoose.model("MOU", MOUSchema);