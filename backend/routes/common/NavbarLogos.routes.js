// @ts-nocheck
// routes/common/NavbarLogos.routes.js
import express from "express";
import NavbarLogosModel from "../../models/common/NavbarLogos.model.js";

const NavbarLogosRouter = express.Router();

NavbarLogosRouter.get("/", async (req, res) => {
  try {
    const navlogos = await NavbarLogosModel.find();
    if (!navlogos) {
      return res.status(404).json({ error: "No navlogos found" });
    }
    res.json(navlogos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


NavbarLogosRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { preLogo, MainLogo } = req.body;

    console.log("Received data NavbarLogosRouter:", req.body);

    // Validate input
    if (!preLogo && !MainLogo) {
      return res.status(400).json({
        error: "At least one field (preLogo or MainLogo) is required to update",
      });
    }

    // Build update object dynamically (only include provided fields)
    const updateData = {};
    if (preLogo) updateData.preLogo = preLogo;
    if (MainLogo) updateData.MainLogo = MainLogo;

    // Update and return the new document
    const updated = await NavbarLogosModel.findByIdAndUpdate(id, updateData, {
      new: true, // return updated document
      runValidators: true, // optional but good practice
    });

    if (!updated) {
      return res.status(404).json({ error: "No logos found" });
    }

    res.status(200).json({
      message: "Logo updated successfully",
      updated,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default NavbarLogosRouter;