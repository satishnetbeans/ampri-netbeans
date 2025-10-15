// models/GuestHouseContact.js
import mongoose from "mongoose";

const GuestHouseContactSchema = new mongoose.Schema(
  {
    Address: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
      required: true,
    },
    Fax: {
      type: String,
      required: true,
    },
    Email: {
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

export default mongoose.model("GuestHouseContact", GuestHouseContactSchema);
