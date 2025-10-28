import ImportantLinks from "../../models/homePage/ImportantLinks.model.js";

// Add  item
export const createImportantLink = async (req, res) => {
  try {
    const { name, url, date } = req.body;
    if (!name || !url) {
      return res.status(400).json({ message: "name and url are required" });
    }
    const lnk = await ImportantLinks.create({ name, url, date });
    res.status(201).json(lnk);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating ImportantLink item", error: error.message });
  }
};

// Get all 
export const getAllImportantLink = async (req, res) => {
  try {
    const lnks = await ImportantLinks.find().sort({ date: -1 });
    res.json(lnks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching ImportantLink", error: error.message });
  }
};

// Update a item
export const updateImportantLink = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, url, date } = req.body;

    const lnk = await ImportantLinks.findByIdAndUpdate(
      id,
      { name, url, date },
      { new: true, runValidators: true }
    );

    if (!lnk) {
      return res.status(404).json({ message: "ImportantLink not found" });
    }

    res.json(lnk);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating ImportantLink", error: error.message });
  }
};

// Delete a item
export const deleteImportantLink = async (req, res) => {
  try {
    const { id } = req.params;
    const lnk = await ImportantLinks.findByIdAndDelete(id);
    if (!lnk) return res.status(404).json({ message: "ImportantLink not found" });
    res.json({ message: "ImportantLink deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting ImportantLink", error: error.message });
  }
};
