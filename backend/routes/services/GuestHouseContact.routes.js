// @ts-nocheck
import express from "express";
import guestHouseContactModel from "../../models/services/guestHouseContact.model.js";

const GuestHouseContactrouter = express.Router();

GuestHouseContactrouter.get("/", async (req, res) => {
  try {
    const directors = await guestHouseContactModel.find().populate("table");
    res.json(directors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

GuestHouseContactrouter.post("/", async (req, res) => {
  try {
    const { order, Address, Phone, Fax,Email, table } = req.body;

    console.log(
      "Creating GuestHouseContact with data:",
      order,
      Address,
      Phone,
      Fax,
      Email,
      table
    );
    console.log("Creating GuestHouseContact with req.body:", req.body);

    // Basic required field validation
    if (!order || !Address || !Phone || !Fax || !table || !Email) {
      return res.status(400).json({
        error: "order,Address, Phone, Fax,Email and table are required",
      });
    }

    const council = new guestHouseContactModel(req.body);
    await council.save();

    res.status(201).json(council);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

GuestHouseContactrouter.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { order, Address, Phone, Fax, Email, table } = req.body;

    // Optional check: at least one field should be provided
    if (
      order === undefined &&
      Address === undefined &&
      Phone === undefined &&
      Email === undefined &&
      Fax === undefined
    ) {
      return res
        .status(400)
        .json({ error: "At least one field must be provided to update" });
    }

    const updated = await guestHouseContactModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updated) return res.status(404).json({ error: "GuestHouseContact not found" });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
GuestHouseContactrouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params; 

    const deleted = await guestHouseContactModel.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "GuestHouseContact not found" });

    res.json({ message: "GuestHouseContact deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default GuestHouseContactrouter;
