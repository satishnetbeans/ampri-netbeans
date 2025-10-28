import express from 'express';

import { createExternalLink, getAllExternalLink, deleteExternalLink , updateExternalLink } from '../../controllers/homePage/ExternalLinks.controller.js';


const externalLinkrouter = express.Router();

externalLinkrouter.post('/', createExternalLink);

externalLinkrouter.get('/', getAllExternalLink);

externalLinkrouter.put('/:id', updateExternalLink);

externalLinkrouter.delete('/:id', deleteExternalLink);

export default externalLinkrouter;
