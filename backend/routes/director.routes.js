// @ts-nocheck
import express from 'express';
import multer from "multer";
import { createDirector, getDirector , updateDirector } from '../controllers/director.controller.js';

import { MulterWithoutDuplicate, upload } from '../middlewares/MulterWithoutDuplicate.js';

const directorrouter = express.Router();


// POST /director - add or update director (only one director)
directorrouter.post('/', createDirector);

// GET /director - fetch the current director
directorrouter.get('/', getDirector);

directorrouter.put('/:id',upload.single("file"),MulterWithoutDuplicate, updateDirector);

export default directorrouter;

