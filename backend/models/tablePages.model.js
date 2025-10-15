// models/TablePage.js
import mongoose from "mongoose";

const TablePagesSchema = new mongoose.Schema(
  {
    pageTitle: {
      type: String,
      required: true,
    },
    columns: [{ type: String, required: true }],
    tabs: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model("TablePage", TablePagesSchema);
