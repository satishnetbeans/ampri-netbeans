// models/Staff.js
import mongoose from "mongoose";

const staffSchema = new mongoose.Schema(
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
    profileLink: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    tab: {
      type: String,
      enum: ["Group I", "Group II", "Group III", "Group IV", "Administration"],
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

export default mongoose.model("Staff", staffSchema);
