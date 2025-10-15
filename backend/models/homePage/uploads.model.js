// models/uploads.js
import mongoose from "mongoose";

const uploadsSchema = new mongoose.Schema({
  section: { type: String, required: true }, // e.g., "banner,facility ,Recent Developments ,foundation day"
  title: { type: String, required: true },
  fileUrl: { type: String, required: true ,unique: true },
  fileType: { type: String, enum: ['image', 'video'], required: true }, // helps frontend decide how to render
}, { timestamps: true });

const Uploads = mongoose.model("Uploads", uploadsSchema);
export default Uploads;
