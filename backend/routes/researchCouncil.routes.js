import express from "express";
import {
  createCouncil,
  getCouncils,
  updateCouncil,
  deleteCouncil,
} from "../controllers/researchCouncil.controller.js";

const researchCouncilrouter = express.Router();


// ResearchCouncil routes
researchCouncilrouter.post("/", createCouncil);
researchCouncilrouter.get("/", getCouncils);
researchCouncilrouter.put("/update/:id", updateCouncil);
researchCouncilrouter.delete("/delete/:id", deleteCouncil);

export default researchCouncilrouter;
