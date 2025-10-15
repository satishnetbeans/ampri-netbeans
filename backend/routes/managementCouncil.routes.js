// @ts-nocheck
import express from "express";
import managementCouncilModel from "../models/about/managementCouncil.model.js";

const managementCouncilrouter = express.Router();

managementCouncilrouter.get("/", async (req, res) => {
  try {
      const councils = await managementCouncilModel.find().populate("table");
      res.json(councils);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

managementCouncilrouter.post("/", async (req, res) => {
  try {
    const { order, name, Affiliation, Position, table } = req.body;

    console.log(
      "Creating council with data:",
      order,
      name,
      Affiliation,
      Position,
      table
    );
    console.log("Creating council with req.body:", req.body);

    // Basic required field validation
    if (!order || !name || !Affiliation || !Position || !table) {
      return res.status(400).json({
        error: "order,name, Affiliation, Position, and table are required",
      });
    }

    const council = new managementCouncilModel(req.body);
    await council.save();

    res.status(201).json(council);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

managementCouncilrouter.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { order, name, Affiliation, Position } = req.body;

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

    const updated = await managementCouncilModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updated) return res.status(404).json({ error: "Council not found" });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
managementCouncilrouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await managementCouncilModel.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Council not found" });

    res.json({ message: "Council deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default managementCouncilrouter;
