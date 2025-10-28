// models/homePage/NavigationLinks.model.js

import mongoose from "mongoose";

const ImportantLinksSchema = new mongoose.Schema({

  name: { type: String, required: true },
  url: { type: String, required: true },

  date: { type: Date, default: Date.now },
});

const ImportantLinks = mongoose.model("ImportantLinks", ImportantLinksSchema);
export default ImportantLinks;
