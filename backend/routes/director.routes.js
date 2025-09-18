import express from 'express';
import multer from "multer";
import { createDirector, getDirector , updateDirector } from '../controllers/director.controller.js';

const directorrouter = express.Router();

// Setup multer for uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// POST /director - add or update director (only one director)
directorrouter.post('/', createDirector);

// GET /director - fetch the current director
directorrouter.get('/', getDirector);

directorrouter.put('/:id',upload.single("file"), updateDirector);

export default directorrouter;

