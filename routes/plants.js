const express = require('express');
const Plant = require('../models/plant');
const router = express.Router();

// Create a new plant
router.put('/', async (req, res) => {
  try {
    const { name, type, characteristics, dayOfCreation } = req.body;
    const plantExists = await Plant.exists({ name });
    if (plantExists) {
      return res.status(400).json({ message: `${name} already exists!` });
    }
    const plant = new Plant({ name, type, characteristics, dayOfCreation });
    await plant.save();
    res.status(201).json({ message: `${name} created successfully!` });
  } catch (err) {
    console.error('Error creating plant:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all plants
router.get('/', async (req, res) => {
  try {
    const plants = await Plant.find();
    res.status(200).json(plants);
  } catch (err) {
    console.error('Error retrieving plants:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get plant by ID
router.get('/:id', async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (!plant) {
      return res.status(404).json({ message: `Plant not found with id ${req.params.id}` });
    }
    res.status(200).json(plant);
  } catch (err) {
    console.error('Error retrieving plant:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get plants by day of creation
router.get('/day/:day', async (req, res) => {
  try {
    const plants = await Plant.find({ dayOfCreation: req.params.day });
    if (plants.length === 0) {
        return res.status(404).json({ message: `No plants were created on day ${req.params.day}. Please read the Bible for more details.` });
      }
    res.status(200).json(plants);
  } catch (err) {
    console.error('Error retrieving plants for the day:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update plant by ID
router.patch('/:id', async (req, res) => {
  try {
    const { name, type, characteristics, dayOfCreation } = req.body;
    const plant = await Plant.findByIdAndUpdate(req.params.id, { name, type, characteristics, dayOfCreation }, { new: true });
    if (!plant) {
      return res.status(404).json({ message: `Plant not found with id ${req.params.id}` });
    }
    res.status(200).json(plant);
  } catch (err) {
    console.error('Error updating plant:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete plant by ID
router.delete('/:id', async (req, res) => {
  try {
    const plant = await Plant.findByIdAndDelete(req.params.id);
    if (!plant) {
      return res.status(404).json({ message: `Plant not found with id ${req.params.id}` });
    }
    res.status(200).json({ message: 'Plant deleted successfully' });
  } catch (err) {
    console.error('Error deleting plant:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
