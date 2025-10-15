// @ts-nocheck
import Gallery from "../models/Gallery.model.js";

/**
 * @desc Create a new gallery
 * @route POST /api/gallery
 */

export const createGallery = async (req, res) => {
  try {
    const { title, sections } = req.body;

    // ===== Validation =====
    if (!title || typeof title !== "string" || !title.trim()) {
      return res.status(400).json({
        success: false,
        message: "Gallery title is required and must be a non-empty string.",
      });
    }

    if (!Array.isArray(sections) || sections.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one section is required.",
      });
    }

    // Validate nested structure
    for (const section of sections) {
      if (!section.sectionTitle || typeof section.sectionTitle !== "string") {
        return res.status(400).json({
          success: false,
          message: "Each section must have a valid sectionTitle.",
        });
      }

      if (!Array.isArray(section.tabs) || section.tabs.length === 0) {
        return res.status(400).json({
          success: false,
          message: `Section "${section.sectionTitle}" must contain at least one tab.`,
        });
      }

      for (const tab of section.tabs) {
        if (!tab.tabTitle || typeof tab.tabTitle !== "string") {
          return res.status(400).json({
            success: false,
            message: "Each tab must have a valid tabTitle.",
          });
        }

        if (!Array.isArray(tab.images) || tab.images.length === 0) {
          return res.status(400).json({
            success: false,
            message: `Tab "${tab.tabTitle}" must contain at least one image.`,
          });
        }

        console.log(req.body);

        for (const image of tab.images) {
          if (!image.src || !image.title) {
            return res.status(400).json({
              success: false,
              message: `Each image must include 'src', 'title', and 'date'.`,
            });
          }
        }
      }
    }

    // ===== Create and Save =====
    const newGallery = new Gallery({ title, sections });
    const savedGallery = await newGallery.save();

    res.status(201).json({
      success: true,
      message: "Gallery created successfully.",
      data: savedGallery,
    });
  } catch (error) {
    console.error("CreateGallery Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while creating gallery.",
      error: error.message,
    });
  }
};

/**
 * @desc Get all galleries
 * @route GET /api/gallery
 */
export const getAllGalleries = async (req, res) => {
  try {
    const galleries = await Gallery.find().sort({ createdAt: -1 });
    res.status(200).json(galleries);
  } catch (error) {
    console.error("GetAllGalleries Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while fetching galleries.",
      error: error.message,
    });
  }
};

/**
 * @desc Get a single gallery by ID
 * @route GET /api/gallery/:id
 */
export const getGalleryById = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);
    if (!gallery) {
      return res
        .status(404)
        .json({ success: false, message: "Gallery not found." });
    }

    res.status(200).json({ success: true, data: gallery });
  } catch (error) {
    console.error("GetGalleryById Error:", error);
    res.status(500).json({
      success: false,
      message: "Error retrieving gallery by ID.",
      error: error.message,
    });
  }
};

/**
 * @desc Update a gallery by ID
 * @route PUT /api/gallery/:id
 */
export const updateGallery = async (req, res) => {
  try {
    const { title, sections } = req.body;
    const id = req.params.id

    console.log("req.body ....  : ",id , req.body);
    // Optional validation (only if fields are being updated)
    if (title && (typeof title !== "string" || !title.trim())) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid title format." });
    }

    if (sections && !Array.isArray(sections)) {
      return res
        .status(400)
        .json({ success: false, message: "Sections must be an array." });
    }

    const updatedGallery = await Gallery.findByIdAndUpdate(
      req.params.id,
      { title, sections },
      { new: true, runValidators: true }
    );

    console.log("updatedGallery : ", updatedGallery);

    if (!updatedGallery) {
      return res
        .status(404)
        .json({ success: false, message: "Gallery not found." });
    }

    res.status(200).json(updatedGallery);
  } catch (error) {
    console.error("UpdateGallery Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while updating gallery.",
      error: error.message,
    });
  }
};

/**
 * @desc Delete a gallery by ID
 * @route DELETE /api/gallery/:id
 */
export const deleteGallery = async (req, res) => {
  try {
    const deletedGallery = await Gallery.findByIdAndDelete(req.params.id);

    if (!deletedGallery) {
      return res
        .status(404)
        .json({ success: false, message: "Gallery not found." });
    }

    res.status(200).json({
      success: true,
      message: "Gallery deleted successfully.",
    });
  } catch (error) {
    console.error("DeleteGallery Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while deleting gallery.",
      error: error.message,
    });
  }
};
