// @ts-nocheck
// routes/uploadsRoutes.js
import express from "express";
import multer from "multer";
import { createUpload, getUploadsBySection, deleteUpload,getAllUploads,updateUpload } from "../controllers/uploads.controller.js";

import {MulterWithoutDuplicate, upload } from "../middlewares/MulterWithoutDuplicate.js";

const uploadrouter = express.Router();

// Routes
uploadrouter.post("/create", upload.single("file"),MulterWithoutDuplicate, createUpload);
uploadrouter.get('/getAllUploads', getAllUploads);

uploadrouter.put("/update/:id",upload.single("file"),MulterWithoutDuplicate, updateUpload);

uploadrouter.get("/:section", getUploadsBySection);

uploadrouter.delete("/delete/:id", deleteUpload);



export default uploadrouter;
