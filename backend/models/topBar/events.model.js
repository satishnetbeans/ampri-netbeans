// models/events.js
import mongoose from "mongoose";

const EventsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    eventDate: {
      type: String,
      required: true,
    }, 
    document: [
      {
        name: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],  
    tab: {
      type: String,
      enum: [
        "Events",
        "Past Events"
      ],
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
    },
  },
  { timestamps: true }
);

export default mongoose.model("Event", EventsSchema);
