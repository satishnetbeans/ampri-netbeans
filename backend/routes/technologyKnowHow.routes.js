// @ts-nocheck
import express from "express";
import technologyKnowHowModel from "../models/RnD/technologyKnowHow.model.js";

const technologyKnowRouter = express.Router();

technologyKnowRouter.get("/", async (req, res) => {
  try {
    const staff = await technologyKnowHowModel.find().populate("table");
    res.json(staff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

technologyKnowRouter.post("/", async (req, res) => {
  try {
    const {
      order,
      table,
      tab,
      Date,
      ["Name of Technology/Knowhow"]: TechnologyKnowHowName,
      ["Name of Party"]: NameOfParty,
    } = req.body;

    console.log("Creating council with req.body:", req.body);

    // Basic required field validation
    if (
      !order ||
      !TechnologyKnowHowName ||
      !NameOfParty ||
      !Date ||
      !tab ||
      !table
    ) {
      return res.status(400).json({
        error:
          "order,TechnologyKnowHowName, NameOfParty, Date,openingDate,tab and table are required",
      });
    }
    const updatedToUpadte = {
      order,
      TechnologyKnowHowName,
      NameOfParty,
      Date,
      tab,
      table,
    };

    console.log("Creating council with data:", updatedToUpadte);

    const council = new technologyKnowHowModel(updatedToUpadte);
    await council.save();

    res.status(201).json(council);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

technologyKnowRouter.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      order,
      Date,
      ["Name of Technology/Knowhow"]: TechnologyKnowHowName,
      ["Name of Party"]: NameOfParty,
    } = req.body;

    console.log("Updating technologyKnowHow with req.body:", req.body);

    // Optional check: at least one field should be provided

    if (
      order === undefined &&
      TechnologyKnowHowName === undefined &&
      NameOfParty === undefined &&
      Date === undefined
    ) {
      return res
        .status(400)
        .json({ error: "At least one field must be provided to update" });
    }

    const updatedToUpadte = {
      order,
      TechnologyKnowHowName,
      NameOfParty,
      Date,
    };

    const updated = await technologyKnowHowModel.findByIdAndUpdate(
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
technologyKnowRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Deleting technologyKnowHow with id:", id);

    const deleted = await technologyKnowHowModel.findByIdAndDelete(id);
    if (!deleted)
      return res.status(404).json({ error: "technologyKnowHow not found" });

    res.json({ message: "technologyKnowHow deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default technologyKnowRouter;
