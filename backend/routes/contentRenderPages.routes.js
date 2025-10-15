import express from 'express';
import {
  getPages,
  getPageBySlug,
  getPageById,
  createPage,
  updatePage,
  deletePage,
  bulkUpdatePages,
  searchPages
} from '../controllers/contentRenderPages.controller.js';
import { upload, MulterWithoutDuplicate, handleFileUpload } from '../middlewares/MulterWithoutDuplicate.js';


const contentRenderPagesRouter = express.Router();

// File upload route
contentRenderPagesRouter.post('/upload', 
  upload.single('file'),
  MulterWithoutDuplicate,
  handleFileUpload
);

// Page routes
contentRenderPagesRouter.get('/', getPages);
contentRenderPagesRouter.get('/search', searchPages);
contentRenderPagesRouter.get('/slug/:slug', getPageBySlug);
contentRenderPagesRouter.get('/:id', getPageById);
contentRenderPagesRouter.post('/', createPage);
contentRenderPagesRouter.put('/:id', updatePage);
contentRenderPagesRouter.delete('/:id', deletePage);
contentRenderPagesRouter.patch('/bulk-update', bulkUpdatePages);

export default contentRenderPagesRouter;