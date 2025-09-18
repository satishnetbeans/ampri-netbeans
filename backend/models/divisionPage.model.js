// models/divisionPage.model.js
import mongoose from "mongoose";

// Define content types
const ContentType = {
  TEXT: "text",
  NUMBER: "number",
  BOOLEAN: "boolean",
  IMAGE: "image",
  VIDEO: "video",
  FILE: "file",
  LINK: "link",
  RICH_TEXT: "rich_text"
};

const ContentItemSchema = new mongoose.Schema({
  type: { 
    type: String, 
    enum: Object.values(ContentType), 
    required: true 
  },
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  // For ordering content items
  order: { type: Number, default: 0 },
  // Additional metadata for different content types
  metadata: {
    altText: { type: String, default: "" }, // For images
    fileName: { type: String, default: "" }, // For files
    url: { type: String, default: "" }, // For links and videos
    // Add other type-specific fields as needed
  }
});

const SubDivisionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: [ContentItemSchema], // Changed from String to array of content items
  // Optional: Keep a simplified text version for search or preview
  textContent: { type: String, default: "" }
});

const DivisionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subdivisions: [SubDivisionSchema],
});

const DivisionPageSchema = new mongoose.Schema({
  pageTitle: { type: String, required: true },
  divisions: [DivisionSchema],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("DivisionPage", DivisionPageSchema);
export { ContentType };

