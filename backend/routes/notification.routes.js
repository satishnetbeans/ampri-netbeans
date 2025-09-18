import express from 'express';
import { createNotification, getAllNotification, deleteNotification , updateNotification } from '../controllers/notification.controller.js';

const notificationrouter = express.Router();

// add a notification item
notificationrouter.post('/', createNotification);

// fetch all notifications
notificationrouter.get('/', getAllNotification);

notificationrouter.put('/:id', updateNotification);

// delete a notification item
notificationrouter.delete('/:id', deleteNotification);

export default notificationrouter;