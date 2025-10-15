// @ts-nocheck
import express from "express";
import {
  createGallery,
  getAllGalleries,
  getGalleryById,
  updateGallery,
  deleteGallery,
} from "../controllers/gallery.controller.js";

const galleryRouter = express.Router();

// Create a new gallery
galleryRouter.post("/", createGallery);

// Get all galleries
galleryRouter.get("/", getAllGalleries);

// Get a single gallery by ID
galleryRouter.get("/:id", getGalleryById);

// Update gallery
galleryRouter.put("/:id", updateGallery);

// Delete gallery
galleryRouter.delete("/:id", deleteGallery);

export default galleryRouter;
