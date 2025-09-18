// routes/uploadsRoutes.js
import express from "express";
import multer from "multer";
import { createUpload, getUploadsBySection, deleteUpload,getAllUploads,updateUpload } from "../controllers/uploads.controller.js";

const uploadrouter = express.Router();

// Setup multer for uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

// Routes
uploadrouter.post("/create", upload.single("file"), createUpload);
uploadrouter.get('/getAllUploads', getAllUploads);

uploadrouter.put("/update/:id",upload.single("file"), updateUpload);

uploadrouter.get("/:section", getUploadsBySection);

uploadrouter.delete("/delete/:id", deleteUpload);



export default uploadrouter;
