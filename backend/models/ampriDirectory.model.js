// models/AmpriDirectory.js
import mongoose from "mongoose";

const AmpriDirectorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    intercom: {
      type: String,
      default: "",
    },
    office: {
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

export default mongoose.model("AmpriDirectory", AmpriDirectorySchema);
