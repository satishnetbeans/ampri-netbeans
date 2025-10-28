// models/homePage/NavigationLinks.model.js

import mongoose from "mongoose";

const NavigationLinksSchema = new mongoose.Schema({
  title: { type: String, required: true },
  links: [
    {
      name: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],

  date: { type: Date, default: Date.now },
});

const NavigationLinks = mongoose.model(
  "NavigationLinks",
  NavigationLinksSchema
);
export default NavigationLinks;
