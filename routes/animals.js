const express = require('express');
const Animal = require('../models/animal');
const router = express.Router();

// Create a new animal
router.put('/', async (req, res) => {
  try {
    const { name, type, characteristics, dayOfCreation } = req.body;
    const animalExists = await Animal.exists({ name });
    if (animalExists) {
        return res.status(400).json({ message: `${name} already exists!` });
        }   
    const animal = new Animal({ name, type, characteristics, dayOfCreation });
    await animal.save();
    res.status(201).json({ message: `${name} created successfully!`, sound: animal.sound() });
  } catch (err) {
    console.error('Error creating animal:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all animals
router.get('/', async (req, res) => {
  try {
    const animals = await Animal.find();
    res.status(200).json(animals.map(animal => ({
      ...animal.toObject(),
      sound: animal.sound()
    })));
  } catch (err) {
    console.error('Error retrieving animals:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get animal by ID
router.get('/:id', async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    if (!animal) {
      return res.status(404).json({ message: `Animal not found with id ${req.params.id}` });
    }
    res.status(200).json({ ...animal.toObject(), sound: animal.sound() });
  } catch (err) {
    console.error('Error retrieving animal:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get animals by day of creation
router.get('/day/:day', async (req, res) => {
  try {
    const animals = await Animal.find({ dayOfCreation: req.params.day });
    if (animals.length === 0) {
        return res.status(404).json({ message: `No animals were created on day ${req.params.day}. Please read the Bible for more details.` });
      }
    res.status(200).json(animals.map(animal => ({
      ...animal.toObject(),
      sound: animal.sound()
    })));
  } catch (err) {
    console.error('Error retrieving animals for the day:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update animal by ID
router.patch('/:id', async (req, res) => {
  try {
    const { name, type, characteristics, dayOfCreation } = req.body;
    const animal = await Animal.findByIdAndUpdate(req.params.id, { name, type, characteristics, dayOfCreation }, { new: true });
    if (!animal) {
      return res.status(404).json({ message: `Animal not found with id ${req.params.id}` });
    }
    res.status(200).json({ ...animal.toObject(), sound: animal.sound() });
  } catch (err) {
    console.error('Error updating animal:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete animal by ID
router.delete('/:id', async (req, res) => {
  try {
    const animal = await Animal.findByIdAndDelete(req.params.id);
    if (!animal) {
      return res.status(404).json({ message: `Animal not found with id ${req.params.id}` });
    }
    res.status(200).json({ message: 'Animal deleted successfully' });
  } catch (err) {
    console.error('Error deleting animal:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
