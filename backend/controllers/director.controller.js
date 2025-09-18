import Director from "../models/director.model.js";

// Create or update director (upsert behavior)
export const createDirector = async (req, res) => {
  try {
    const { name, designation, message, image } = req.body;

    let director = await Director.findOne();
    if (director) {
      director.name = name;
      director.designation = designation;
      director.message = message;
      director.image = image;
      await director.save();
    } else {
      director = await Director.create({ name, designation, message, image });
    }

    res.status(200).json(director);
  } catch (error) {
    res.status(500).json({ message: 'Failed to save director', error: error.message });
  }
};

// Get director
export const getDirector = async (req, res) => {
  
  try {
    const director = await Director.findOne();
    if (!director) {
      return res.status(404).json({ message: 'Director not found' });
    }
    res.json(director);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching director', error: error.message });
  }
};


// Update director by ID
export const updateDirector = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, designation, message, image } = req.body;

    console.log(id ,req.body)

    const director = await Director.findById(id);
    if (!director) {
      return res.status(404).json({ message: "Director not found" });
    }

    director.name = name || director.name;
    director.designation = designation || director.designation;
    director.message = message || director.message;
    director.image = image || director.image;

    await director.save();

    res.status(200).json({ message: "Director updated successfully", director });
  } catch (error) {
    res.status(500).json({ message: "Failed to update director", error: error.message });
  }
};
