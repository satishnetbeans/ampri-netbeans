import express from "express";
import {
  createVisionMandate,
  getVisionMandate,
  updateVisionMandate,
} from "../controllers/visionMandate.controller.js";

const visionMandaterouter = express.Router();

visionMandaterouter.post("/", createVisionMandate);
visionMandaterouter.get("/", getVisionMandate);
visionMandaterouter.put("/:id", updateVisionMandate);

export default visionMandaterouter;
