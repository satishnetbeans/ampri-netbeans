import ExternalLinks from "../../models/homePage/ExternalLinks.model.js";

// Add  item
export const createExternalLink = async (req, res) => {
  try {
    const { img, alt, link } = req.body;

    console.log("Creating externalLink with data:", req.body);
    if (!img || !link) {
      return res.status(400).json({ message: "img and link are required" });
    }
    const lnk = await ExternalLinks.create({ img,alt, link });
    res.status(201).json(lnk);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating externalLink item", error: error.message });
  }
};

// Get all
export const getAllExternalLink = async (req, res) => {
  try {
    const lnk = await ExternalLinks.find().sort({ date: -1 });
    res.json(lnk);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching externalLink", error: error.message });
  }
};

// Update a  item
export const updateExternalLink = async (req, res) => {
  try {
    const { id } = req.params;
    const { img, alt, link  } = req.body;

    const lnk = await ExternalLinks.findByIdAndUpdate(
      id,
      { img, link, alt },
      { new: true, runValidators: true }
    );

    if (!lnk) {
      return res.status(404).json({ message: "externalLink not found" });
    }

    res.json(lnk);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating externalLink", error: error.message });
  }
};

// Delete a  item
export const deleteExternalLink = async (req, res) => {
  try {
    const { id } = req.params;
    const lnk = await ExternalLinks.findByIdAndDelete(id);
    if (!lnk) return res.status(404).json({ message: "News not found" });
    res.json({ message: "externalLink deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting externalLink", error: error.message });
  }
};
