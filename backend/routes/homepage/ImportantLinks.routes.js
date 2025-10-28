import express from 'express';

import { createImportantLink, getAllImportantLink, deleteImportantLink , updateImportantLink } from '../../controllers/homePage/ImportantLinks.controller.js';



const importantLinkrouter = express.Router();

importantLinkrouter.post('/', createImportantLink);

importantLinkrouter.get('/', getAllImportantLink);

importantLinkrouter.put('/:id', updateImportantLink);

importantLinkrouter.delete('/:id', deleteImportantLink);

export default importantLinkrouter;
