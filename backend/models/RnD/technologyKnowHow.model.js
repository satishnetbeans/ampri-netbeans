// models/technologyKnowHow.js
import mongoose from "mongoose";

const technologyKnowHowSchema = new mongoose.Schema(
  {
    TechnologyKnowHowName: {
      type: String,
      required: true,
    },
    NameOfParty: {
      type: String,
      required: true,
    },
    Date: {
      type: String,
      required: true,
    },
    tab: {
      type: String,
      enum: ["Year-2024", "Year-2023", "Year-2021", "Year-2020", "Year-2019","Year-2018","2013-2017"],
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

export default mongoose.model("technologyKnowHow", technologyKnowHowSchema);