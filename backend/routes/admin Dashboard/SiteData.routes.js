// @ts-nocheck
// routes/siteData.routes.js
import express from "express";
import {
  getSiteData,
  updateSiteData,
  addLog,
} from "../../controllers/admin Dashboard/SiteData.controllers.js";



const siteDatarouter = express.Router();

siteDatarouter.get("/", getSiteData);
siteDatarouter.put("/", updateSiteData);
siteDatarouter.post("/log", addLog);

export default siteDatarouter;
