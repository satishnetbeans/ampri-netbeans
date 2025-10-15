// models/officeMemorandum.js
import mongoose from "mongoose";

const OfficeMemorandumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    Date: {
      type: String,
      required: true,
    },
    SubjectArea: {
      type: String,
    },
    document: [
      {
        name: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
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

export default mongoose.model("OfficeMemorandum", OfficeMemorandumSchema);