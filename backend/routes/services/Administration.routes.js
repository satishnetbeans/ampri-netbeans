// @ts-nocheck
import express from "express";
import AdministrationModel from "../../models/services/Administration.model.js";

import tablePagesModel from "../../models/tablePages.model.js";

const AdministrationRouter = express.Router();

AdministrationRouter.get("/", async (req, res) => {
  try {
    const staff = await AdministrationModel.find().populate("table");
    res.json(staff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

AdministrationRouter.post("/", async (req, res) => {
  try {
    const { order, name, designation, email, intercom, office, table } =
      req.body;

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
      intercom,
      office,
      table,
    };
    const tableData = await tablePagesModel.findById(table);
    console.log("table :", tableData);
    console.log("updatedToUpadte :", updatedToUpadte); 

    const council = new AdministrationModel(updatedToUpadte);
    await council.save();
    console.log("Creating adminstration with updatedToUpadte:", council);

    res.status(201).json(council);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

AdministrationRouter.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { order, name, designation, email, intercom, office } = req.body;

    // Optional check: at least one field should be provided
    if (
      order === undefined &&
      name === undefined &&
      designation === undefined &&
      email === undefined &&
      intercom === undefined &&
      office === undefined
    ) {
      return res
        .status(400)
        .json({ error: "At least one field must be provided to update" });
    }

    const intOrder = parseInt(order, 10);

    console.log("inttttttttt :", intOrder);
    if (isNaN(intOrder)) {
      return res.status(400).json({ error: "Order must be a valid number" });
    }

    const updatedToUpadte = {
      order: intOrder,
      name,
      designation,
      email,
      intercom,
      office,
    };

    const updated = await AdministrationModel.findByIdAndUpdate(
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

AdministrationRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await AdministrationModel.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Council not found" });

    res.json({ message: "Council deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default AdministrationRouter;
