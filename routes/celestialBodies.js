const express = require('express');
const CelestialBody = require('../models/celestialBody');
const router = express.Router();

// Create a new celestial body
router.put('/', async (req, res) => {
  try {
    const { name, type, characteristics, dayOfCreation } = req.body;
    const celestialBodyExists = await CelestialBody.exists({ name });
    if (celestialBodyExists) {
      return res.status(400).json({ message: `${name} already exists!` });
    }
    const celestialBody = new CelestialBody({ name, type, characteristics, dayOfCreation });
    await celestialBody.save();
    res.status(201).json({ message: `${name} created successfully!` });
  } catch (err) {
    console.error('Error creating celestial body:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all celestial bodies
router.get('/', async (req, res) => {
  try {
    const celestialBodies = await CelestialBody.find();
    res.status(200).json(celestialBodies);
  } catch (err) {
    console.error('Error retrieving celestial bodies:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get celestial body by ID
router.get('/:id', async (req, res) => {
  try {
    const celestialBody = await CelestialBody.findById(req.params.id);
    if (!celestialBody) {
      return res.status(404).json({ message: `Celestial body not found with id ${req.params.id}` });
    }
    res.status(200).json(celestialBody);
  } catch (err) {
    console.error('Error retrieving celestial body:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get celestial bodies by day of creation
router.get('/day/:day', async (req, res) => {
  try {
    const celestialBodies = await CelestialBody.find({ dayOfCreation: req.params.day });
    if (celestialBodies.length === 0) {
        return res.status(404).json({ message: `No celestialBodies were created on day ${req.params.day}. Please read the Bible for more details.` });
      }
    res.status(200).json(celestialBodies);
  } catch (err) {
    console.error('Error retrieving celestial bodies for the day:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update celestial body by ID
router.patch('/:id', async (req, res) => {
  try {
    const { name, type, characteristics, dayOfCreation } = req.body;
    const celestialBody = await CelestialBody.findByIdAndUpdate(req.params.id, { name, type, characteristics, dayOfCreation }, { new: true });
    if (!celestialBody) {
      return res.status(404).json({ message: `Celestial body not found with id ${req.params.id}` });
    }
    res.status(200).json(celestialBody);
  } catch (err) {
    console.error('Error updating celestial body:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete celestial body by ID
router.delete('/:id', async (req, res) => {
  try {
    const celestialBody = await CelestialBody.findByIdAndDelete(req.params.id);
    if (!celestialBody) {
      return res.status(404).json({ message: `Celestial body not found with id ${req.params.id}` });
    }
    res.status(200).json({ message: 'Celestial body deleted successfully' });
  } catch (err) {
    console.error('Error deleting celestial body:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
