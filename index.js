const mongoose = require('mongoose');
const express = require('express');
const animalRoutes = require('./routes');

const app = express();
app.use(express.json());
app.use('/animals', animalRoutes);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server is up on port 3000');
    });
  } catch (err) {
    console.error('Connection error', err);
  }
}

main();
