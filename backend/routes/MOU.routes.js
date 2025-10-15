// @ts-nocheck
import express from "express";
import MOUModel from "../models/RnD/MOU.model.js";

const MOURouter = express.Router();

MOURouter.get("/", async (req, res) => {
  try {
      const staff = await MOUModel.find().populate("table");
      res.json(staff);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

MOURouter.post("/", async (req, res) => {
  try {
    const {
      order,
      Country,
      table,
      tab,
      ['Name of the Company/agency']: CompanyAgencyName,
      ['Title/ brief description']: description,
      ['Validity Period']: Validity,
      ['Date of commencement']: commencementDate,
    } = req.body;

    console.log("Creating council with req.body:", req.body);

    // Basic required field validation
    if (
      !order ||
      !Country ||
      !CompanyAgencyName ||
      !tab ||
      !table
    ) {
      return res.status(400).json({
        error:
          "order,Country, CompanyAgencyName,tab and table are required",
      });
    }
    const updatedToUpadte = {
      order,
      Country,
      CompanyAgencyName,
      description,
      Validity,
      commencementDate,
      tab,
      table,
    };

    console.log("Creating MOU with data:", updatedToUpadte);

    const council = new MOUModel(updatedToUpadte);
    await council.save();

    res.status(201).json(council);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

MOURouter.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
     const {
      order,
      Country,
      ['Name of the Company/agency']: CompanyAgencyName,
      ['Title/ brief description']: description,
      ['Validity Period']: Validity,
      ['Date of commencement']: commencementDate,
    } = req.body;

    
    
    // Optional check: at least one field should be provided
    if (
      order === undefined &&
      Country === undefined &&
      CompanyAgencyName === undefined &&
      description === undefined &&
      Validity === undefined &&
      commencementDate === undefined
    ) {
      return res
        .status(400)
        .json({ error: "At least one field must be provided to update" });
    }
    
    console.log("Updating MOU with req.body:", req.body);

    const updatedToUpadte = {
      order,
      Country,
      CompanyAgencyName,
      description,
      Validity,
      commencementDate,
    }; 

    const updated = await MOUModel.findByIdAndUpdate(
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

MOURouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await MOUModel.findByIdAndDelete(id);
    if (!deleted)
      return res.status(404).json({ error: "technologyKnowHow not found" });

    res.json({ message: "technologyKnowHow deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default MOURouter;