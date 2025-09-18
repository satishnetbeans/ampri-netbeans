// controllers/divisionPage.controller.js
// @ts-nocheck

import DivisionPage, { ContentType } from "../models/divisionPage.model.js";

// Create new Division Page
export const createDivisionPage = async (req, res) => {
  try {
    const { pageTitle } = req.body;
    const newPage = new DivisionPage({ pageTitle, divisions: [] });
    await newPage.save();
    res.status(201).json(newPage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all pages
export const getAllDivisionPages = async (req, res) => {
  try {
    const pages = await DivisionPage.find();
    res.status(200).json(pages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single page by ID
export const getDivisionPageById = async (req, res) => {
  try {
    const page = await DivisionPage.findById(req.params.pageId);
    if (!page) return res.status(404).json({ error: "Page not found" });
    res.status(200).json(page);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update page title
export const updateDivisionPage = async (req, res) => {
  try {
    const { pageTitle } = req.body;
    const page = await DivisionPage.findByIdAndUpdate(
      req.params.pageId,
      { pageTitle },
      { new: true }
    );
    res.status(200).json(page);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete page
export const deleteDivisionPage = async (req, res) => {
  try {
    await DivisionPage.findByIdAndDelete(req.params.pageId);
    res.status(200).json({ message: "Page deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add Division
export const addDivision = async (req, res) => {
  try {
    const { name } = req.body;
    const page = await DivisionPage.findById(req.params.pageId);
    page.divisions.push({ name, subdivisions: [] });
    await page.save();
    res.status(201).json(page);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Division
export const deleteDivision = async (req, res) => {
  try {
    const { divisionId } = req.params;
    const page = await DivisionPage.findById(req.params.pageId);
    page.divisions = page.divisions.filter(
      (d) => d._id.toString() !== divisionId
    );
    await page.save();
    res.status(200).json(page);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add Subdivision
export const addSubdivision = async (req, res) => {
  try {
    const { title } = req.body;
    const page = await DivisionPage.findById(req.params.pageId);
    const division = page.divisions.id(req.params.divisionId);
    
    // Create a new subdivision with empty content array
    division.subdivisions.push({ 
      title, 
      content: [],
      textContent: "" 
    });
    
    await page.save();
    res.status(201).json(page);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add Content Item to Subdivision
export const addContentItem = async (req, res) => {
  try {
    const { type, value, metadata, order } = req.body;
    const page = await DivisionPage.findById(req.params.pageId);
    const division = page.divisions.id(req.params.divisionId);
    const subdivision = division.subdivisions.id(req.params.subdivisionId);
    
    // Create new content item
    const newContentItem = {
      type,
      value,
      metadata: metadata || {},
      order: order || subdivision.content.length
    };
    
    subdivision.content.push(newContentItem);
    
    // Update textContent for search/preview
    if (type === ContentType.TEXT || type === ContentType.RICH_TEXT) {
      subdivision.textContent += value + " ";
    }
    
    await page.save();
    res.status(201).json(page);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Content Item
export const updateContentItem = async (req, res) => {
  try {
    const { value, metadata, order } = req.body;
    const page = await DivisionPage.findById(req.params.pageId);
    const division = page.divisions.id(req.params.divisionId);
    const subdivision = division.subdivisions.id(req.params.subdivisionId);
    const contentItem = subdivision.content.id(req.params.contentItemId);
    
    if (value !== undefined) contentItem.value = value;
    if (metadata !== undefined) contentItem.metadata = metadata;
    if (order !== undefined) contentItem.order = order;
    
    // Update textContent if this is a text item
    if (contentItem.type === ContentType.TEXT || contentItem.type === ContentType.RICH_TEXT) {
      // Rebuild textContent from all text items
      subdivision.textContent = subdivision.content
        .filter(item => item.type === ContentType.TEXT || item.type === ContentType.RICH_TEXT)
        .map(item => item.value)
        .join(" ");
    }
    
    await page.save();
    res.status(200).json(page);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Content Item
export const deleteContentItem = async (req, res) => {
  try {
    const page = await DivisionPage.findById(req.params.pageId);
    const division = page.divisions.id(req.params.divisionId);
    const subdivision = division.subdivisions.id(req.params.subdivisionId);
    
    subdivision.content = subdivision.content.filter(
      (c) => c._id.toString() !== req.params.contentItemId
    );
    
    // Update textContent if needed
    subdivision.textContent = subdivision.content
      .filter(item => item.type === ContentType.TEXT || item.type === ContentType.RICH_TEXT)
      .map(item => item.value)
      .join(" ");
    
    await page.save();
    res.status(200).json(page);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Reorder Content Items
export const reorderContentItems = async (req, res) => {
  try {
    const { contentItemIds } = req.body; // Array of IDs in new order
    const page = await DivisionPage.findById(req.params.pageId);
    const division = page.divisions.id(req.params.divisionId);
    const subdivision = division.subdivisions.id(req.params.subdivisionId);
    
    // Create a map for quick lookup
    const contentMap = new Map();
    subdivision.content.forEach(item => {
      contentMap.set(item._id.toString(), item);
    });
    
    // Rebuild content array in the new order
    const newContent = [];
    contentItemIds.forEach((id, index) => {
      const item = contentMap.get(id);
      if (item) {
        item.order = index;
        newContent.push(item);
      }
    });
    
    // Add any items that weren't in the provided list (shouldn't happen but just in case)
    subdivision.content.forEach(item => {
      if (!contentItemIds.includes(item._id.toString())) {
        newContent.push(item);
      }
    });
    
    subdivision.content = newContent;
    await page.save();
    res.status(200).json(page);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Subdivision
export const deleteSubdivision = async (req, res) => {
  try {
    const page = await DivisionPage.findById(req.params.pageId);
    const division = page.divisions.id(req.params.divisionId);
    division.subdivisions = division.subdivisions.filter(
      (s) => s._id.toString() !== req.params.subdivisionId
    );
    await page.save();
    res.status(200).json(page);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};