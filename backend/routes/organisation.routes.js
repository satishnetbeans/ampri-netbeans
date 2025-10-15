// @ts-nocheck
// routes/organisation.routes.js
import express from "express";
import organisationModel from "../models/about/organisation.model.js";
import {
  upload,
  MulterWithoutDuplicate,
} from "../middlewares/MulterWithoutDuplicate.js";

const organisationRouter = express.Router();

organisationRouter.get("/", async (req, res) => {
  try {
    const organisation = await organisationModel.find();
    if (!organisation) {
      return res.status(404).json({ error: "No organisation found" });
    }
    res.json(organisation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

organisationRouter.post(
  "/",
  upload.single("image"),
  MulterWithoutDuplicate,
  async (req, res) => {
    try {
      const { alt } = req.body;
      console.log("Received data:", req.body, req.file);
      const imageLink = req.file.storedPath.replace(/\\/g, "/");

      if (!imageLink) {
        return res.status(400).json({ error: "Image is required" });
      }

      const isAlt = alt ? alt : "";
      const newImg = new organisationModel({ imageLink, alt: isAlt });
      await newImg.save();
      res.status(201).json(newImg);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);
organisationRouter.put(
  "/:id",
  upload.single("image"),
  MulterWithoutDuplicate,
  async (req, res) => {
    try {
      const { id } = req.params;
      const { alt } = req.body;
      console.log("Received data:", req.body, req.file);
      const org = await organisationModel.findById(id);
      if (!org) {
        return res.status(404).json({ error: "No organisation found" });
      }
      let imageLink;
      if (req.file) {
        imageLink = req.file.storedPath.replace(/\\/g, "/");
      } else {
        imageLink = null;
      }

      if (!imageLink && !alt) {
        return res.status(400).json({
          error: "At least one field (image or alt) is required to update",
        });
      }

      if (imageLink) {
        org.imageLink = imageLink;
      }
      if (alt) {
        org.alt = alt;
      }
      const updated = await org.save();
      res.status(201).json(updated);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

export default organisationRouter;
