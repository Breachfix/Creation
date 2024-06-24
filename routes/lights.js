const express = require('express');
const Light = require('../models/light');
const router = express.Router();

// Create a new light
router.put('/', async (req, res) => {
  try {
    const { name, description, characteristics, dayOfCreation } = req.body;
    const lightExists = await Light.exists({ name });
    if (lightExists) {
      return res.status(400).json({ message: `${name} already exists!` });
    }
    const light = new Light({ name, description, characteristics, dayOfCreation });
    await light.save();
    res.status(201).json({ message: `${name} created successfully!` });
  } catch (err) {
    console.error('Error creating light:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all lights
router.get('/', async (req, res) => {
  try {
    const lights = await Light.find();
    res.status(200).json(lights);
  } catch (err) {
    console.error('Error retrieving lights:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get light by ID
router.get('/:id', async (req, res) => {
  try {
    const light = await Light.findById(req.params.id);
    if (!light) {
      return res.status(404).json({ message: `Light not found with id ${req.params.id}` });
    }
    res.status(200).json(light);
  } catch (err) {
    console.error('Error retrieving light:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get lights by day of creation
router.get('/day/:day', async (req, res) => {
  try {
    const lights = await Light.find({ dayOfCreation: req.params.day });
    if (lights.length === 0) {
        return res.status(404).json({ message: `No lights were created on day ${req.params.day}. Please read the Bible for more details.` });
      }
    res.status(200).json(lights);
  } catch (err) {
    console.error('Error retrieving lights for the day:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update light by ID
router.patch('/:id', async (req, res) => {
  try {
    const { name, description, characteristics, dayOfCreation } = req.body;
    const light = await Light.findByIdAndUpdate(req.params.id, { name, description, characteristics, dayOfCreation }, { new: true });
    if (!light) {
      return res.status(404).json({ message: `Light not found with id ${req.params.id}` });
    }
    res.status(200).json(light);
  } catch (err) {
    console.error('Error updating light:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete light by ID
router.delete('/:id', async (req, res) => {
  try {
    const light = await Light.findByIdAndDelete(req.params.id);
    if (!light) {
      return res.status(404).json({ message: `Light not found with id ${req.params.id}` });
    }
    res.status(200).json({ message: 'Light deleted successfully' });
  } catch (err) {
    console.error('Error deleting light:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
