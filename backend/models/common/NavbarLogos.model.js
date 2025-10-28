// models/about/organisation.model.js
import mongoose from "mongoose";

const NavLogosSchema = new mongoose.Schema(
  {
    preLogo: {
      imageLink: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: "logo1",
      },
    },
    MainLogo: {
      imageLink: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: "logo",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("NavBarLogos", NavLogosSchema);
