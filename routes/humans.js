const express = require('express');
const Human = require('../models/human');
const router = express.Router();

// Create a new human
router.put('/', async (req, res) => {
  try {
    const { name, characteristics, dayOfCreation } = req.body;
    const humanExists = await Human.exists({ name });
    if (humanExists) {
        return res.status(400).json({ message: `${name} already exists!` });
    }
    const human = new Human({ name, characteristics, dayOfCreation });
    await human.save();
    res.status(201).json({ message: `${name} created successfully!` });
  } catch (err) {
    console.error('Error creating human:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all humans
router.get('/', async (req, res) => {
  try {
    const humans = await Human.find();
    res.status(200).json(humans);
  } catch (err) {
    console.error('Error retrieving humans:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get human by ID
router.get('/:id', async (req, res) => {
  try {
    const human = await Human.findById(req.params.id);
    if (!human) {
      return res.status(404).json({ message: `Human not found with id ${req.params.id}` });
    }
    res.status(200).json(human);
  } catch (err) {
    console.error('Error retrieving human:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get humans by day of creation
router.get('/day/:day', async (req, res) => {
  try {
    const humans = await Human.find({ dayOfCreation: req.params.day });
    if (humans.length === 0) {
        return res.status(404).json({ message: `No humans were created on day ${req.params.day}. Please read the Bible for more details.` });
      }
    res.status(200).json(humans);
  } catch (err) {
    console.error('Error retrieving humans for the day:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update human by ID
router.patch('/:id', async (req, res) => {
  try {
    const { name, characteristics, dayOfCreation } = req.body;
    const human = await Human.findByIdAndUpdate(req.params.id, { name, characteristics, dayOfCreation }, { new: true });
    if (!human) {
      return res.status(404).json({ message: `Human not found with id ${req.params.id}` });
    }
    res.status(200).json(human);
  } catch (err) {
    console.error('Error updating human:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete human by ID
router.delete('/:id', async (req, res) => {
  try {
    const human = await Human.findByIdAndDelete(req.params.id);
    if (!human) {
      return res.status(404).json({ message: `Human not found with id ${req.params.id}` });
    }
    res.status(200).json({ message: 'Human deleted successfully' });
  } catch (err) {
    console.error('Error deleting human:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
