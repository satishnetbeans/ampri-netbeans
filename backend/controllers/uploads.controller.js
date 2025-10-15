// @ts-nocheck
// controllers/uploadsController.js
import Uploads from "../models/homePage/uploads.model.js";
import fs from "fs";
import path from "path";

// CREATE upload
export const createUpload = async (req, res) => {
  try {
    console.log("body : ", req.body);
    const { section, title, fileType } = req.body;
    if (!section || !title || !fileType) {
      return res
        .status(400)
        .json({ message: "Section, title, and fileType are required" });
    }
    const fileUrl = req.file?.storedPath.replace(/\\/g, "/"); // normalize for Windows

    if (!fileUrl) return res.status(400).json({ message: "File is required" });

    const upload = new Uploads({ section, title, fileUrl, fileType });
    await upload.save();

    res.status(201).json({ message: "uploaded file successfully", upload });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ all uploads
export const getAllUploads = async (req, res) => {
  try {
    const uploads = await Uploads.find().sort({ createdAt: -1 });
    res.json(uploads);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch uploads", error: error.message });
  }
};

// READ uploads by section
export const getUploadsBySection = async (req, res) => {
  try {
    const { section } = req.params;
    const uploads = await Uploads.find({ section }).sort({ createdAt: -1 });
    res.json(uploads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE upload
export const updateUpload = async (req, res) => {
  try {
    const { id } = req.params;
    const { section, title, fileType } = req.body;

    const upload = await Uploads.findById(id);
    if (!upload) return res.status(404).json({ message: "Upload not found" });

    console.log("Received data:", req.body, req.file);

    // If new file uploaded, replace old one
    if (req.file) {
      upload.fileUrl = req.file?.storedPath.replace(/\\/g, "/");
    }

    // update fields
    if (section) upload.section = section;
    if (title) upload.title = title;
    if (fileType) upload.fileType = fileType;

    const updated = await upload.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE upload
export const deleteUpload = async (req, res) => {
  try {
    const upload = await Uploads.findById(req.params.id);
    if (!upload) return res.status(404).json({ message: "Upload not found" });

    await upload.deleteOne();
    res.json({ message: "Upload deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
