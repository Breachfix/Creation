const express = require('express');
const mongoose = require('mongoose');
const Animal = require('./model');
const router = express.Router();

// Helper function to check if an ID is a valid MongoDB ObjectID
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// PUT - Create a new animal
router.put('/', async (req, res) => {
  try {
    const { name, colour, age, type } = req.body;
    const animal = new Animal({ name, colour, age, type });
    const animalExists = await Animal.exists({ name });
    if (animalExists) {
      return res.status(400).json({ message: `${name} already exists!` });
    }
    await animal.save();

    const greeting = animal.bark();
    res.status(201).json({ greeting, animal });
  } catch (err) {
    console.error('Error creating animal:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET - Retrieve all animals
router.get('/', async (req, res) => {
  try {
    const animals = await Animal.find();
    res.status(200).json(animals);
  } catch (err) {
    console.error('Error retrieving animals:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET - Retrieve a specific animal by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: `Invalid ID format: ${id}` });
  }

  try {
    const animal = await Animal.findById(id);
    if (!animal) {
      return res.status(404).json({ message: `Animal not found with id ${id}` });
    }
    res.status(200).json(animal);
  } catch (err) {
    console.error('Error retrieving animal:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE - Delete a specific animal by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: `Invalid ID format: ${id}` });
  }

  try {
    const animal = await Animal.findByIdAndDelete(id);
    if (!animal) {
      return res.status(404).json({ message: `Animal not found with id ${id}` });
    }
    res.status(200).json({ message: 'Animal deleted successfully' });
  } catch (err) {
    console.error('Error deleting animal:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PATCH - Update a specific animal by ID
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: `Invalid ID format: ${id}` });
  }

  try {
    const { name, colour, age, type } = req.body;
    const animal = await Animal.findByIdAndUpdate(
      id,
      { name, colour, age, type },
      { new: true }
    );
    if (!animal) {
      return res.status(404).json({ message: `Animal not found with id ${id}` });
    }
    res.status(200).json(animal);
  } catch (err) {
    console.error('Error updating animal:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
