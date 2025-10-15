// models/administration.js
import mongoose from "mongoose";

const AdministrationSchema = new mongoose.Schema(
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
    },
    office: {
      type: String,
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

export default mongoose.model("Administration", AdministrationSchema);
