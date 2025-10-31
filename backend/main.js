// @ts-nocheck
import dotenv from 'dotenv';
dotenv.config();


import express from "express";
import path from "path";
import mime from "mime";
import fs from "fs";

import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongoose.config.js";

import uploadrouter from "./routes/uploads.routes.js";
import directorrouter from "./routes/director.routes.js";
import newsrouter from "./routes/news.routes.js";
import notificationrouter from "./routes/notification.routes.js";
import importantLinkrouter from "./routes/homepage/ImportantLinks.routes.js";
import navigationLinkrouter from "./routes/homepage/NavigationLinks.routes.js";
import externalLinkrouter from "./routes/homepage/ExternalLinks.routes.js";

import adminRouter from "./routes/Users.routes.js";
import visionMandaterouter from "./routes/visionMandate.routes.js";

// table
import organisationRouter from "./routes/organisation.routes.js";
import researchCouncilrouter from "./routes/researchCouncil.routes.js";
import managementCouncilrouter from "./routes/managementCouncil.routes.js";
import staffRouter from "./routes/staff.routes.js";
import formerDirectorsrouter from "./routes/formerDirectors.routes.js";
import technologyKnowRouter from "./routes/technologyKnowHow.routes.js";
import MOURouter from "./routes/MOU.routes.js";
import tenderRouter from "./routes/tender.routes.js";
import ampriDirectoryRouter from "./routes/ampriDirectory.routes.js";

import GuestHouseContactrouter from "./routes/services/GuestHouseContact.routes.js";
import AdministrationRouter from "./routes/services/Administration.routes.js";

import eventsRouter from "./routes/topBar/events.routes.js";
import careerRouter from "./routes/topBar/career.routes.js";
import officeMemorandumRouter from "./routes/topBar/officeMemorandum.routes.js";

// content contentRenderPages
import contentRenderPagesRouter from "./routes/contentRenderPages.routes.js";

import tableRouter from "./routes/TableContent.routes.js";

import divisionPageRouter from "./routes/divisionPage.routes.js";

import siteDatarouter from "./routes/admin Dashboard/SiteData.routes.js";

import galleryRouter from "./routes/Gallery.routes.js";

import NavbarLogosRouter from "./routes/common/NavbarLogos.routes.js";


//models

const app = express();


console.log("process.env.CORS_ORIGIN......  : ",process.env.CORS_ORIGIN)
// ✅ Proper CORS setup
app.use(
  cors({
    origin: process.env.CORS_ORIGIN.split(","),
    credentials: true, // allow cookies & Authorization headers
  })
);

app.use(express.json());
app.use(cookieParser()); // ✅ to read cookies from requests


app.use("/uploads", (req, res, next) => {
  const filePath = path.join(process.cwd(), "uploads", req.path);

  if (fs.existsSync(filePath)) {
    const type = mime.getType(filePath) || "application/octet-stream";

    // ✅ Force correct video type for .mp4, .webm, etc.
    if (type.startsWith("video/")) {
      res.setHeader("Content-Type", type);
      res.setHeader("Accept-Ranges", "bytes");
      res.sendFile(filePath);
    } else {
      res.setHeader("Content-Type", type);
      res.sendFile(filePath);
    }
  } else {
    res.status(404).send("File not found");
  }
});

// Connect DB
try {
  await connectDB();
} catch (err) {
  console.error("MongoDB connection failed:", err);
  process.exit(1);
}

// Routes
app.use("/upload", uploadrouter);
app.use("/director", directorrouter);
app.use("/news", newsrouter);
app.use("/notification", notificationrouter);

app.use("/importantLink", importantLinkrouter);
app.use("/externalLink", externalLinkrouter);
app.use("/navigationLink", navigationLinkrouter);

app.use("/admin", adminRouter);
app.use("/vision-mandate", visionMandaterouter);
app.use("/organisation", organisationRouter);
app.use("/researchCouncil", researchCouncilrouter);
app.use("/managementCouncil", managementCouncilrouter);
app.use("/staff", staffRouter);
app.use("/formerDirectors", formerDirectorsrouter);
app.use("/technologyKnowHow", technologyKnowRouter);
app.use("/MOU", MOURouter);
app.use("/tender", tenderRouter);
app.use("/ampriDirectory", ampriDirectoryRouter);

app.use("/events", eventsRouter);
app.use("/career", careerRouter);
app.use("/officeMemorandum", officeMemorandumRouter);

app.use("/table", tableRouter);

// services
app.use("/GuestHouseContact", GuestHouseContactrouter);
app.use("/Administration", AdministrationRouter);

app.use("/contentRenderPages", contentRenderPagesRouter);

app.use("/division-page", divisionPageRouter);

app.use("/siteData", siteDatarouter);

app.use("/galllery", galleryRouter);

app.use("/navbar-logos", NavbarLogosRouter);

const PORT = process.env.PORT || 4001;

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve React build (frontend) in production
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../frontend/dist"); // for Vite
  app.use(express.static(frontendPath));

  app.get("*", (req, res) =>
    res.sendFile(path.join(frontendPath, "index.html"))
  );
} 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 