// @ts-nocheck
import express from "express";
import ampriDirectoryModel from "../models/ampriDirectory.model.js";

const ampriDirectoryRouter = express.Router();

ampriDirectoryRouter.get("/", async (req, res) => {
  try {
    const staff = await ampriDirectoryModel.find().populate("table");
    res.json(staff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

ampriDirectoryRouter.post("/", async (req, res) => {
  try {
    const {
      order,
      name,
      designation,
      email,
      INTERCOM,
      OFFICE,
      duties,
      payLevel,
      basicPay,
      table,
    } = req.body;

    console.log("Creating ampri directory with req.body:", req.body);

    // Basic required field validation
    if (!order || !name || !designation || !email || !table) {
      return res.status(400).json({
        error: "order,name, designation, email, and table are required",
      });
    }
    const intOrder = parseInt(order, 10);
    const updatedToUpadte = {
      order: intOrder,
      name,
      designation,
      email,
      intercom: INTERCOM,
      office: OFFICE,
      duties,
      payLevel,
      basicPay,
      table,
    };

    const council = new ampriDirectoryModel(updatedToUpadte);
    await council.save();

    res.status(201).json(council);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

ampriDirectoryRouter.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      order,
      name,
      designation,
      email,
      INTERCOM,
      OFFICE,
      duties,
      payLevel,
      basicPay,
    } = req.body;

    // Optional check: at least one field should be provided
    if (
      order === undefined &&
      name === undefined &&
      designation === undefined &&
      email === undefined &&
      INTERCOM === undefined &&
      OFFICE === undefined &&
      duties === undefined &&
      payLevel === undefined &&
      basicPay === undefined
    ) {
      return res
        .status(400)
        .json({ error: "At least one field must be provided to update" });
    }

    const updatedToUpadte = {
      order,
      name,
      designation,
      email,
      intercom: INTERCOM,
      office: OFFICE,
      duties,
      payLevel,
      basicPay,
    };

    const updated = await ampriDirectoryModel.findByIdAndUpdate(
      id,
      updatedToUpadte,
      {
        new: true,
      }
    );

    if (!updated) return res.status(404).json({ error: "Council not found" });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

ampriDirectoryRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await ampriDirectoryModel.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Council not found" });

    res.json({ message: "Council deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default ampriDirectoryRouter;
