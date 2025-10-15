// @ts-nocheck
import express from "express";
import tenderModel from "../models/tender.model.js";

import {
  MulterWithoutDuplicate,
  upload,
} from "../middlewares/MulterWithoutDuplicate.js";

const tenderRouter = express.Router();

tenderRouter.get("/", async (req, res) => {
  try {
    const staff = await tenderModel.find().populate("table");
    res.json(staff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

tenderRouter.post(
  "/",
  upload.array("documents", 10),
  MulterWithoutDuplicate,
  async (req, res) => {
    try {
      const {
        order,
        table,
        tab,
        ["Title / Name of Work"]: title,
        ["Last Date of Receipt of Tender"]: lastDate,
        ["Opening Date of Tender"]: openingDate,
      } = req.body;

      console.log("type : ", typeof req.body.documentNames);
      console.log("Creating tender with req.body:", req.body);
      console.log("files   :", req.files);

      let arr = [];
      if ("documentNames" in req.body) {
        // Single document (string)
        if (typeof req.body.documentNames === "string") {
          arr.push({
            name: req.body.documentNames,
            url:
              req.files[0].storedPath.replace(/\\/g, "/") ||
              req.files[0].path.replace(/\\/g, "/"),
          });
        }
        // Multiple documents (array)
        else if (Array.isArray(req.body.documentNames)) {
          for (let i = 0; i < req.body.documentNames.length; i++) {
            const name = req.body.documentNames[i];
            const file = req.files[i];

            arr.push({
              name: name,
              url:
                file.storedPath.replace(/\\/g, "/") ||
                file.path.replace(/\\/g, "/"),
            });
          }
        }
      }

      const document = arr;

      console.log(document);

      // Basic required field validation
      if (
        !order ||
        !title ||
        !document ||
        !lastDate ||
        !openingDate ||
        !tab ||
        !table
      ) {
        return res.status(400).json({
          error:
            "order,title, document, lastDate,openingDate,tab and table are required",
        });
      }
      const intOrder = parseInt(order, 10);
      const updatedToUpadte = {
        order: intOrder,
        title,
        document,
        lastDate,
        openingDate,
        tab,
        table,
      };

      console.log("Creating tender with updatedToUpadte:", updatedToUpadte);

      const council = new tenderModel(updatedToUpadte);
      await council.save();

      res.status(201).json(council);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

tenderRouter.put(
  "/update/:id",
  upload.array("documents", 10),
  MulterWithoutDuplicate,
  async (req, res) => {
    try {
      const { id } = req.params;
      const {
        order,
        ["Title / Name of Work"]: title,
        ["Last Date of Receipt of Tender"]: lastDate,
        ["Opening Date of Tender"]: openingDate,
      } = req.body;

      console.log("updating tender with req.body:", req.body);
      console.log("files   :", req.files);

      let arr = [];
      if ("updateDocumentNames" in req.body) {
        if (typeof req.body.updateDocumentNames === "string") {
          console.log("str");
          arr.push({
            name: req.body.updateDocumentNames,
            url: req.body.updateURLs,
          });
        } else if (Array.isArray(req.body.updateDocumentNames)) {
          for (let i = 0; i < req.body.updateDocumentNames.length; i++) {
            const name = req.body.updateDocumentNames[i];
            const file = req.body.updateURLs[i];
            console.log(name, file);

            arr.push({
              name: name,
              url: file,
            });
          }
        }
      }

      console.log(arr);

      if ("documentNames" in req.body) {
        // Single document (string)
        if (typeof req.body.documentNames === "string") {
          arr.push({
            name: req.body.documentNames,
            url:
              req.files[0].storedPath.replace(/\\/g, "/") ||
              req.files[0].path.replace(/\\/g, "/"),
          });
        }
        // Multiple documents (array)
        else if (Array.isArray(req.body.documentNames)) {
          for (let i = 0; i < req.body.documentNames.length; i++) {
            const name = req.body.documentNames[i];
            const file = req.files[i];
 
            arr.push({
              name: name,
              url:
                file.storedPath.replace(/\\/g, "/") ||
                file.path.replace(/\\/g, "/"),
            });
          }
        }
      }
      console.log("fjhrbg");

      const document = arr;

      console.log(document);

      // Optional check: at least one field should be provided
      if (
        order === undefined &&
        title === undefined &&
        document === undefined &&
        lastDate === undefined &&
        openingDate === undefined 
      ) {
        return res
          .status(400)
          .json({ error: "At least one field must be provided to update" });
      }

      const updatedToUpadte = {
        order,
        title,
        document,
        lastDate,
        openingDate,
      };

      const updated = await tenderModel.findByIdAndUpdate(id, updatedToUpadte, {
        new: true,
      });

      if (!updated) return res.status(404).json({ error: "Council not found" });

      res.json(updated);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);
tenderRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await tenderModel.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Council not found" });

    res.json({ message: "Council deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default tenderRouter;
