// models/homePage/ExternalLinks.model.js

import mongoose from "mongoose";

const ExternalLinksSchema = new mongoose.Schema({
  img: { type: String, required: true },
  alt: { type: String, required: true },
  link: { type: String },

  date: { type: Date, default: Date.now },
});

const ExternalLinks = mongoose.model("ExternalLinks", ExternalLinksSchema);
export default ExternalLinks;
