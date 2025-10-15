// models/Director.js

import mongoose from "mongoose";

const directorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  image: {
    type: String, // URL or file path (e.g. /uploads/director.jpg)
    required: true,
  },
}, {
  timestamps: true,
});

const Director = mongoose.model("Director", directorSchema);
export default Director;