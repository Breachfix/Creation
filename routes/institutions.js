const express = require('express');
const Institution = require('../models/institution');
const router = express.Router();

// Create a new institution
router.put('/', async (req, res) => {
  try {
    const { name, description, dayOfCreation } = req.body;
    const institutionExists = await Institution.exists({ name });
    if (institutionExists) {
      return res.status(400).json({ message: `${name} already exists!` });
    }
    const institution = new Institution({ name, description, dayOfCreation });
    await institution.save();
    res.status(201).json({ message: `${name} created successfully!` });
  } catch (err) {
    console.error('Error creating institution:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all institutions
router.get('/', async (req, res) => {
  try {
    const institutions = await Institution.find();
    res.status(200).json(institutions);
  } catch (err) {
    console.error('Error retrieving institutions:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get institution by ID
router.get('/:id', async (req, res) => {
  try {
    const institution = await Institution.findById(req.params.id);
    if (!institution) {
      return res.status(404).json({ message: `Institution not found with id ${req.params.id}` });
    }
    res.status(200).json(institution);
  } catch (err) {
    console.error('Error retrieving institution:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get institutions by day of creation
router.get('/day/:day', async (req, res) => {
  try {
    const institutions = await Institution.find({ dayOfCreation: req.params.day });
    if (institutions.length === 0) {
        return res.status(404).json({ message: `No institutions were created on day ${req.params.day}. Please read the Bible for more details.` });
      }
    res.status(200).json(institutions);
  } catch (err) {
    console.error('Error retrieving institutions for the day:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update institution by ID
router.patch('/:id', async (req, res) => {
  try {
    const { name, description, dayOfCreation } = req.body;
    const institution = await Institution.findByIdAndUpdate(req.params.id, { name, description, dayOfCreation }, { new: true });
    if (!institution) {
      return res.status(404).json({ message: `Institution not found with id ${req.params.id}` });
    }
    res.status(200).json(institution);
  } catch (err) {
    console.error('Error updating institution:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete institution by ID
router.delete('/:id', async (req, res) => {
  try {
    const institution = await Institution.findByIdAndDelete(req.params.id);
    if (!institution) {
      return res.status(404).json({ message: `Institution not found with id ${req.params.id}` });
    }
    res.status(200).json({ message: 'Institution deleted successfully' });
  } catch (err) {
    console.error('Error deleting institution:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
