// @ts-nocheck
import express from "express";
import multer from "multer";
import staffModel from "../models/about/staff.model.js";
import fs from "fs";
import path from "path";

import {
  MulterWithoutDuplicate,
  upload,
} from "../middlewares/MulterWithoutDuplicate.js";

const staffRouter = express.Router();

staffRouter.get("/", async (req, res) => {
  try {
    const staff = await staffModel.find().populate("table");
    res.json(staff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

staffRouter.post(
  "/",
  upload.single("staffImage"),
  MulterWithoutDuplicate,
  async (req, res) => {
    try {
      const { order, table, tab, name, designation, email, imageUrl } =
        req.body;

      console.log("body: ", req.body);
      // Basic required field validation
      if (!order || !name || !designation || !email || !tab || !table) {
        return res.status(400).json({
          error: "order,name, designation, email,tab and table are required",
        });
      }
      console.log("imageeeeeeeeeeeeeee: ", req.file);

      const uploadedImageUrl = req.file?.storedPath.replace(/\\/g, "/");

      console.log("imageUrl: ", uploadedImageUrl);

      const intOrder = parseInt(order, 10);
      const updatedToUpadte = {
        order: intOrder,
        name,
        designation,
        email,
        imageUrl: uploadedImageUrl,
        tab,
        table,
      };
      console.log("updatedToUpadte : ", updatedToUpadte);

      const council = new staffModel(updatedToUpadte);
      await council.save();

      res.status(201).json(council);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

staffRouter.put(
  "/update/:id",
  upload.single("staffImage"),
  MulterWithoutDuplicate,
  async (req, res) => {
    try {
      const { id } = req.params;
      const { order, name, designation, email, imageUrl } = req.body;

      console.log("body :", req.body);

      // Optional check: at least one field should be provided
      if (
        order === undefined &&
        name === undefined &&
        designation === undefined &&
        email === undefined
      ) {
        return res
          .status(400)
          .json({ error: "At least one field must be provided to update" });
      }
      
      console.log("imageeeeeeeeeeeeeee: ", req.file);
      const uploadedImageUrl = req.file?.storedPath.replace(/\\/g, "/");
      console.log("imageUrl: ", uploadedImageUrl);

      const updated = await staffModel.findByIdAndUpdate(
        id,
        { ...req.body, imageUrl: uploadedImageUrl },
        {
          new: true,
        }
      );

      if (!updated) return res.status(404).json({ error: "Council not found" });

      res.json(updated);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

staffRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await staffModel.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "staff not found" });

    res.json({ message: "staff deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default staffRouter;
