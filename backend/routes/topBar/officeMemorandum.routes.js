// @ts-nocheck
import express from "express";
import officeMemorandumModel from "../../models/topBar/officeMemorandum.model.js";

import {
  MulterWithoutDuplicate,
  upload,
} from "../../middlewares/MulterWithoutDuplicate.js";

const officeMemorandumRouter = express.Router();

officeMemorandumRouter.get("/", async (req, res) => {
  try {
    const staff = await officeMemorandumModel.find().populate("table");
    res.json(staff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

officeMemorandumRouter.post(
  "/",
  upload.array("documents", 10),
  MulterWithoutDuplicate,
  async (req, res) => {
    try {
      const {
        order,
        table,
        ["Title"]: title,
        ["OM Date"]: Date,
        ["Subject Area"]: SubjectArea,
      } = req.body;

      console.log("type : ", typeof req.body.documentNames);
      console.log("Creating officeMemorandum with req.body:", req.body);
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
                file.storedPath.replace(/\\/g, "/")
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
        !Date ||
        !table
      ) {
        return res.status(400).json({
          error:
            "order,title, Date,  and table are required"
        });
      }
      const intOrder = parseInt(order, 10);
      const updatedToUpadte = {
        order: intOrder,
        title,
        document,
        Date,
        SubjectArea,
        table,
      };

      console.log("Creating officeMemorandum with updatedToUpadte:", updatedToUpadte);

      const council = new officeMemorandumModel(updatedToUpadte);
      await council.save();

      res.status(201).json(council);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

officeMemorandumRouter.put(
  "/update/:id",
  upload.array("documents", 10),
  MulterWithoutDuplicate,
  async (req, res) => {
    try {
      const { id } = req.params;
      const {
        order,
        ["Title"]: title,
        ["OM Date"]: Date,
        ["Subject Area"]: SubjectArea,
      } = req.body;

      console.log("updating officeMemorandum with req.body:", req.body);
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
              req.files[0].storedPath.replace(/\\/g, "/")
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
                file.storedPath.replace(/\\/g, "/") 
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
        Date === undefined &&
        SubjectArea === undefined
      ) {
        return res
          .status(400)
          .json({ error: "At least one field must be provided to update" });
      }

      const updatedToUpadte = {
        order,
        title,
        document,
        Date,
        SubjectArea,
      };

      const updated = await officeMemorandumModel.findByIdAndUpdate(
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
  }
);

officeMemorandumRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await officeMemorandumModel.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Council not found" });

    res.json({ message: "Council deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default officeMemorandumRouter;
