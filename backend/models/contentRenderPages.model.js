// @ts-nocheck
import mongoose from "mongoose";

// Sub-schemas for content blocks
const contentBlockSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: [
        "paragraph",
        "heading",
        "subHeading",
        "image",
        "list",
        "imagesList",
      ],
    },
    para: {
      type: String,
      default: "",
    },
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
    items: [
      {
        type: String,
        default: "",
      },
    ],
    imagesListItems: [
      {
        src: {
          type: String,
          default: "",
        },
        alt: {
          type: String,
          default: "",
        },
      },
    ],
    order: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

const tabSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: [contentBlockSchema],
  },
  { _id: false }
);

const pageContentSchema = new mongoose.Schema(
  {
    content: [contentBlockSchema],
    tabs: [tabSchema],
  },
  { _id: false }
);

// Main Page Schema
const pageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    pageContent: {
      type: pageContentSchema,
      required: true,
    },
    category: {
      type: String,
      enum: ["about", "research", "facilities", "services", "general"],
      default: "general",
      index: true,
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
    version: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save middleware to generate slug
pageSchema.pre("save", function (next) {
  if (!this.slug || this.isModified("title")) {
    console.log(">>> pre save running for:", this.title);
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/\s+/g, "-")
      .substring(0, 100);
  }
  this.lastUpdated = Date.now();
  next();
});

console.log(">>> Middleware attached");

// Static method for finding by slug
pageSchema.statics.findBySlug = function (slug) {
  return this.findOne({ slug, isActive: true });
};

// Static method for finding by category
pageSchema.statics.findByCategory = function (category) {
  return this.find({ category, isActive: true }).sort({ title: 1 });
};

// Indexes for optimized queries
pageSchema.index({ slug: 1, isActive: 1 });
pageSchema.index({ category: 1, isActive: 1 });
pageSchema.index({ title: "text", "pageContent.content.para": "text" });
pageSchema.index({ lastUpdated: -1 });
pageSchema.index({ createdAt: -1 });

export default mongoose.model("ContentRenderPage", pageSchema);
