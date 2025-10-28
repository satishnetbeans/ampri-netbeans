import express from 'express';

import { createNavigationLink, getAllNavigationLink, deleteNavigationLink , updateNavigationLink } from '../../controllers/homePage/NavigationLinks.controller.js';


const navigationLinkrouter = express.Router();

navigationLinkrouter.post('/', createNavigationLink);

navigationLinkrouter.get('/', getAllNavigationLink);

navigationLinkrouter.put('/:id', updateNavigationLink);

navigationLinkrouter.delete('/:id', deleteNavigationLink);

export default navigationLinkrouter;
