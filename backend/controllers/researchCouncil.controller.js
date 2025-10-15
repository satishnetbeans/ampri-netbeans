// @ts-nocheck

import ResearchCouncil from "../models/about/researchCouncil.model.js";
import TablePage from "../models/tablePages.model.js";

// ========== TablePage CRUD ==========

// Create a new TablePage
// Create a new TablePage
export const createTablePage = async (req, res) => {
  try {
    const { pageTitle, tabs, columns } = req.body;

    if (!pageTitle || !columns) {
      return res
        .status(400)
        .json({ error: "pageTitle and columns are required" });
    }

    const newPage = new TablePage({ pageTitle, tabs, columns });
    await newPage.save();

    res.status(201).json(newPage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update TablePage (tabs / columns)
export const updateTablePage = async (req, res) => {
  try {
    const { id } = req.params; // TablePage id
    const { pageTitle, tabs, columns } = req.body;

    const updatedPage = await TablePage.findByIdAndUpdate(
      id,
      { pageTitle, tabs, columns },
      { new: true }
    );

    if (!updatedPage)
      return res.status(404).json({ error: "TablePage not found" });

    res.json(updatedPage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ========== ResearchCouncil CRUD ==========

// Create council data under a TablePage
// Create council data under a TablePage
export const createCouncil = async (req, res) => {
  try {
    const { order, name, Affiliation, Position, table } = req.body;

    
    console.log("Creating council with req.body:", req.body);

    // Basic required field validation
    if (!order || !name || !Affiliation || !Position || !table) {
      return res.status(400).json({
        error: "name, Affiliation, Position, and table are required",
      });
    }

    const council = new ResearchCouncil(req.body);
    console.log(
      "Creating council with council:",
      council
    );
    await council.save();

    res.status(201).json(council);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all councils (populate table info)
export const getCouncils = async (req, res) => {
  try {
    const councils = await ResearchCouncil.find().populate("table");
    res.json(councils);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a council
export const updateCouncil = async (req, res) => {
  try {
    const { id } = req.params;
    const { order, name, Affiliation, Position } = req.body;

    console.log("check : ", order, name, Affiliation, Position, id);
    console.log(req.body);

    // Optional check: at least one field should be provided
    if (
      order === undefined &&
      name === undefined &&
      Affiliation === undefined &&
      Position === undefined
    ) {
      return res
        .status(400)
        .json({ error: "At least one field must be provided to update" });
    }

    const updated = await ResearchCouncil.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updated) return res.status(404).json({ error: "Council not found" });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a council
export const deleteCouncil = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await ResearchCouncil.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Council not found" });

    res.json({ message: "Council deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
