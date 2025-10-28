import NavigationLinks from "../../models/homePage/NavigationLinks.model.js";

// Add  item
export const createNavigationLink = async (req, res) => {
  try {
    const { title, links } = req.body;
    console.log("Creating navigationLink with data:", req.body);
    if (!title || !links) {
      return res.status(400).json({ message: "Title and links are required" });
    }
    const lnk = await NavigationLinks.create({ title, links });
    res.status(201).json(lnk);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating NavigationLink item", error: error.message });
  }
};

// Get all 
export const getAllNavigationLink = async (req, res) => {
  try {
    const lnks = await NavigationLinks.find().sort({ date: -1 });
    res.json(lnks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching NavigationLink", error: error.message });
  }
};

// Update a item
export const updateNavigationLink = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, links } = req.body;

    const lnk = await NavigationLinks.findByIdAndUpdate(
      id,
      { title, links },
      { new: true, runValidators: true }
    );

    if (!lnk) {
      return res.status(404).json({ message: "NavigationLink not found" });
    }

    res.json(lnk);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating NavigationLink", error: error.message });
  }
};

// Delete a item
export const deleteNavigationLink = async (req, res) => {
  try {
    const { id } = req.params;
    const lnk = await NavigationLinks.findByIdAndDelete(id);
    if (!lnk) return res.status(404).json({ message: "NavigationLink not found" });
    res.json({ message: "NavigationLink deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting NavigationLink", error: error.message });
  }
};
