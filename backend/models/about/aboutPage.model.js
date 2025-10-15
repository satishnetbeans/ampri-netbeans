// models/about.model.js
import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["paragraph", "subHeading", "list"], // restrict to your types
    },
    para: {
      type: String,
      required: true,
    },
    items: {
      type: [String], // only used when type === "list"
      default: [],
    },
  },
  { _id: false }
);

const aboutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    pageContent: {
      content: {
        type: [contentSchema],
        required: true,
      },
    },
  },
  { timestamps: true }
);

const About = mongoose.model("About", aboutSchema);

export default About;
