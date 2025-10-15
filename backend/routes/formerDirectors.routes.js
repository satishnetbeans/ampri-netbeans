// @ts-nocheck
import express from "express";
import formerDirectorsModel from "../models/about/formerDirectors.model.js";

const formerDirectorsrouter = express.Router();

formerDirectorsrouter.get("/", async (req, res) => {
  try {
    const directors = await formerDirectorsModel.find().populate("table");
    res.json(directors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

formerDirectorsrouter.post("/", async (req, res) => {
  try {
    const { order, name, duration_from, duration_to, table } = req.body;

    console.log(
      "Creating council with data:",
      order,
      name,
      duration_from,
      duration_to,
      table
    );
    console.log("Creating council with req.body:", req.body);

    // Basic required field validation
    if (!order || !name || !duration_from || !duration_to || !table) {
      return res.status(400).json({
        error: "order,name, duration_from, duration_to, and table are required",
      });
    }

    const council = new formerDirectorsModel(req.body);
    await council.save();

    res.status(201).json(council);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

formerDirectorsrouter.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { order, name, duration_from, duration_to } = req.body;

    // Optional check: at least one field should be provided
    if (
      order === undefined &&
      name === undefined &&
      duration_from === undefined &&
      duration_to === undefined
    ) {
      return res
        .status(400)
        .json({ error: "At least one field must be provided to update" });
    }

    const updated = await formerDirectorsModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updated) return res.status(404).json({ error: "Council not found" });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
formerDirectorsrouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params; 

    const deleted = await formerDirectorsModel.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Council not found" });

    res.json({ message: "Council deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default formerDirectorsrouter;
