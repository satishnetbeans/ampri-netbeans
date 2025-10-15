import VisionMandate from "../models/homePage/visionMandate.model.js";

// Create new vision/mandate
export const createVisionMandate = async (req, res) => {
  try {
    const { vision, mandate } = req.body;
    const created = await VisionMandate.create({ vision, mandate });
    res.status(201).json(created);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all (you’ll usually only have one, but keeping flexible)
export const getVisionMandate = async (req, res) => {
  try {
    const records = await VisionMandate.find();
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update by ID
export const updateVisionMandate = async (req, res) => {
  try {
    const { id } = req.params;
    const { vision, mandate } = req.body;
    const updated = await VisionMandate.findByIdAndUpdate(
      id,
      { vision, mandate },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
