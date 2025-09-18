// routes/divisionPage.routes.js
import express from "express";
import {
  createDivisionPage,
  getAllDivisionPages,
  getDivisionPageById,
  updateDivisionPage,
  deleteDivisionPage,
  addDivision,
  deleteDivision,
  addSubdivision,
  deleteSubdivision,
  addContentItem,
  updateContentItem,
  deleteContentItem,
  reorderContentItems,
  // updateSubdivisionTitle // You'll need to add this to your controller
} from "../controllers/divisionPage.controller.js";
import { authAdmin } from "../middlewares/jwtAuth.js";

const router = express.Router();

// Pages
router.post("/", authAdmin, createDivisionPage);
router.get("/", getAllDivisionPages);
router.get("/:pageId", getDivisionPageById);
router.put("/:pageId", authAdmin, updateDivisionPage);
router.delete("/:pageId", authAdmin, deleteDivisionPage);

// Divisions
router.post("/:pageId/divisions", authAdmin, addDivision);
router.delete("/:pageId/divisions/:divisionId", authAdmin, deleteDivision);

// Subdivisions
router.post(
  "/:pageId/divisions/:divisionId/subdivisions",
  authAdmin,
  addSubdivision
);
// router.put(
//   "/:pageId/divisions/:divisionId/subdivisions/:subdivisionId/title",
//   authAdmin,
//   updateSubdivisionTitle
// );
router.delete(
  "/:pageId/divisions/:divisionId/subdivisions/:subdivisionId",
  authAdmin,
  deleteSubdivision
);

// Content items
router.post(
  "/:pageId/divisions/:divisionId/subdivisions/:subdivisionId/content",
  authAdmin,
  addContentItem
);
router.put(
  "/:pageId/divisions/:divisionId/subdivisions/:subdivisionId/content/:contentItemId",
  authAdmin,
  updateContentItem
);
router.delete(
  "/:pageId/divisions/:divisionId/subdivisions/:subdivisionId/content/:contentItemId",
  authAdmin,
  deleteContentItem
);
router.post(
  "/:pageId/divisions/:divisionId/subdivisions/:subdivisionId/content/reorder",
  authAdmin,
  reorderContentItems
);

export default router;
