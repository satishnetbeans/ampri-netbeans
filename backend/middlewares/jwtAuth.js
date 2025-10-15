// @ts-nocheck

// middlewares/authAdmin.js
import jwt from "jsonwebtoken";
import SiteDataModel from "../models/admin Dashboard/SiteData.model.js";

export const authAdmin = async (req, res, next) => {
  try {
    const token = req.cookies?.token; // JWT is in cookies

    console.log("ufbgbhjbf ", req.params.userVisited);
    if (req.params?.userVisited === "true") {
      await SiteDataModel.findOneAndUpdate(
        {},
        {
          $inc: { totalUsers: 1 },
        }
      );
    }

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded.role) {
      return res
        .status(403)
        .json({ message: "Forbidden: Access can't be allowed" });
    }

    req.user = decoded; // attach decoded data to request
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
