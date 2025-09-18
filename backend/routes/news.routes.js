import express from 'express';
import { createNews, getAllNews, deleteNews , updateNews } from '../controllers/news.controller.js';

const newsrouter = express.Router();

// POST /news - add a news item
newsrouter.post('/', createNews);

// GET /news - fetch all news
newsrouter.get('/', getAllNews);

newsrouter.put('/:id', updateNews);

// DELETE /news/:id - delete a news item
newsrouter.delete('/:id', deleteNews);

export default newsrouter;
