// @ts-nocheck
import Notification from "../models/homePage/notifications.js";

// Add Notification item
export const createNotification = async (req, res) => {
  try {
    const { title, link, date } = req.body;
    const notifications = await Notification.create({ title, link, date });
    res.status(201).json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Error creating Notification item', error: error.message });
  }
};

// Get all Notification
export const getAllNotification = async (req, res) => {
  try {
    const NotificationList = await Notification.find().sort({ date: -1 });
    res.json(NotificationList);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Notifications', error: error.message });
  }
};

// Update a Notification item
export const updateNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, link, date } = req.body;

    const notification = await Notification.findByIdAndUpdate(
      id,
      { title, link, date },
      { new: true, runValidators: true }
    );

    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }

    res.json(notification);
  } catch (error) {
    res.status(500).json({ message: "Error updating Notification", error: error.message });
  }
};

// Delete a Notification item
export const deleteNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findByIdAndDelete(id);
    if (!notification) return res.status(404).json({ message: 'Notification not found' });
    res.json({ message: 'Notification deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Notification', error: error.message });
  }
};