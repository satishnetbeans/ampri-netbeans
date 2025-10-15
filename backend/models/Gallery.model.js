// gallermodel.js
import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique :true
    },
    sections: [
      {
        sectionTitle: { type: String, required: true },
        tabs: [
          {
            tabTitle: { type: String, required: true },
            images: [
              {
                src: { type: String, required: true },
                title: { type: String, required: true },
                date: { type: String },
                alt: { type: String },
              },
            ],
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Gallery", GallerySchema);
