import News from "../models/news.model.js";

// Add news item
export const createNews = async (req, res) => {
  try {
    const { title, link, date } = req.body;
    const news = await News.create({ title, link, date });
    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Error creating news item', error: error.message });
  }
};

// Get all news
export const getAllNews = async (req, res) => {
  try {
    const newsList = await News.find().sort({ date: -1 });
    res.json(newsList);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news', error: error.message });
  }
};

// Update a news item
export const updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, link, date } = req.body;

    const news = await News.findByIdAndUpdate(
      id,
      { title, link, date },
      { new: true, runValidators: true }
    );

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    res.json(news);
  } catch (error) {
    res.status(500).json({ message: "Error updating news", error: error.message });
  }
};

// Delete a news item
export const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findByIdAndDelete(id);
    if (!news) return res.status(404).json({ message: 'News not found' });
    res.json({ message: 'News deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting news', error: error.message });
  }
};
