// models/about/organisation.model.js
import mongoose from "mongoose";

const OrganisationSchema = new mongoose.Schema(
  {
    imageLink: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Organisation", OrganisationSchema);