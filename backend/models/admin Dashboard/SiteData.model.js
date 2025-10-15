// models/SiteData.model.js
import mongoose from "mongoose";

const logSchema = new mongoose.Schema(
  {
    deviceInfo: {
      type: String,
      required: true,
    },
    ipAddress: {
      type: String,
    },
    loginTime: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const siteDataSchema = new mongoose.Schema(
  {
    totalUsers: {
      type: Number,
      default: 0,
    },
    activeSessions: {
      type: Number,
      default: 0,
    },
    lastModified: {
      type: Date,
      default: Date.now
    },
    logs: {
      type: [logSchema],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("SiteData", siteDataSchema);
