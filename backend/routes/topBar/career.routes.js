// @ts-nocheck
import express from "express";
import careerModel from "../../models/topBar/career.model.js";

import {
  MulterWithoutDuplicate,
  upload,
} from "../../middlewares/MulterWithoutDuplicate.js";

const getAttribute = (column) => {
  if (column === "Detail & Application") return "DetailnApplication";
  if (column === "Notifications") return "Notifications";
  if (column === "Shortlisted Candidates for Interview")
    return "ShortlistedCandidates";
  if (column === "Result") return "Result";
  if (column === "Project Staff") return "ProjectStaff";
  return null;
};

const careerRouter = express.Router();

careerRouter.get("/", async (req, res) => {
  try {
    const staff = await careerModel.find().populate("table");
    res.json(staff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

careerRouter.post(
  "/",
  upload.array("documents", 10),
  MulterWithoutDuplicate,
  async (req, res) => {
    try {
      const { order, table, tab, Positions } = req.body;

      console.log("type : ", typeof req.body.documentNames);
      console.log("files   :", req.files);

      let column = "";
      let arr = [];

      if ("documentNames" in req.body) {
        // Single document (string)
        if (typeof req.body.documentNames === "string") {
          if (!column || column === "") {
            column = req.body.documentNames.split("-")[1];
          }
          arr.push({
            name: req.body.documentNames.split("-")[0],
            url:
              req.files[0].storedPath.replace(/\\/g, "/") ||
              req.files[0].path.replace(/\\/g, "/"),
          });
        }

        // Multiple documents (array)
        else if (Array.isArray(req.body.documentNames)) {
          for (let i = 0; i < req.body.documentNames.length; i++) {
            const name = req.body.documentNames[i].split("-")[0];
            const file = req.files[i];

            if (!column || column === "") {
              column = req.body.documentNames[i].split("-")[1];
            }

            arr.push({
              name: name,
              url:
                file.storedPath.replace(/\\/g, "/") ||
                file.path.replace(/\\/g, "/"),
            });
          }
        }
      }

      console.log("column :", column);
      console.log(arr);
      console.log("Creating career with :", order, table, tab, Positions);

      // Basic required field validation
      if (!order || !Positions || !tab || !table) {
        return res.status(400).json({
          error: "order,Positions, tab and table are required",
        });
      }
      const intOrder = parseInt(order, 10);
      const updatedToUpadte = {
        order: intOrder,
        Positions,
        [getAttribute(column)]: arr.length > 0 ? arr : undefined,
        tab,
        table,
      };

      console.log("Creating tender with updatedToUpadte:", updatedToUpadte);

      const council = new careerModel(updatedToUpadte);
      await council.save();

      res.status(201).json(council);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

careerRouter.put(
  "/update/:id",
  upload.array("documents", 10),
  MulterWithoutDuplicate,
  async (req, res) => {
    try {
      const { id } = req.params;
      const {
        order,
        Positions,
      } = req.body;

      console.log(!DetailnApplication);
      console.log(!ProjectStaff);

      console.log("updating career with req.body:", req.body);
      let column = "";

      console.log("files   :", req.files);

      let arr = [];
      if ("updateDocumentNames" in req.body) {
        if (typeof req.body.updateDocumentNames === "string") {
          console.log("str");
          column = req.body.updateDocumentNames.split("-")[1];

          arr.push({
            name: req.body.updateDocumentNames.split("-")[0],
            url: req.body.updateURLs,
          });
        } else if (Array.isArray(req.body.updateDocumentNames)) {
          for (let i = 0; i < req.body.updateDocumentNames.length; i++) {
            const name = req.body.updateDocumentNames[i].split("-")[0];
            const file = req.body.updateURLs[i];
            console.log(name, file);
            column = req.body.updateDocumentNames[i].split("-")[1];

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
          if (!column || column === "") {
            column = req.body.documentNames.split("-")[1];
          }
          arr.push({
            name: req.body.documentNames.split("-")[0],
            url:
              req.files[0].storedPath.replace(/\\/g, "/") ||
              req.files[0].path.replace(/\\/g, "/"),
          });
        }

        // Multiple documents (array)
        else if (Array.isArray(req.body.documentNames)) {
          for (let i = 0; i < req.body.documentNames.length; i++) {
            const name = req.body.documentNames[i].split("-")[0];
            const file = req.files[i];

            if (!column || column === "") {
              column = req.body.documentNames[i].split("-")[1];
            }

            arr.push({
              name: name,
              url:
                file.storedPath.replace(/\\/g, "/") ||
                file.path.replace(/\\/g, "/"),
            });
          }
        }
      }

      console.log("column :", column);
      console.log(arr);

      // Optional check: at least one field should be provided
      if (
        order === undefined &&
        Positions === undefined &&
        ProjectStaff === undefined
      ) {
        return res
          .status(400)
          .json({ error: "At least one field must be provided to update" });
      }

      const updatedToUpadte = {
        order,
        Positions,
        [getAttribute(column)]: arr.length > 0 ? arr : undefined,
        [!ProjectStaff &&
        getAttribute(column) !== "ProjectStaff" &&
        ProjectStaff]: [],
          

      };

      const updated = await careerModel.findByIdAndUpdate(id, updatedToUpadte, {
        new: true,
      });

      if (!updated) return res.status(404).json({ error: "Council not found" });

      res.json(updated);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

careerRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await careerModel.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Council not found" });

    res.json({ message: "Council deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default careerRouter;
