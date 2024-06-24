const mongoose = require('mongoose');
const express = require('express');
const lightRoutes = require('./routes/lights');
const celestialBodyRoutes = require('./routes/celestialBodies');
const plantRoutes = require('./routes/plants');
const animalRoutes = require('./routes/animals');
const humanRoutes = require('./routes/humans');
const institutionRoutes = require('./routes/institutions');

const app = express();
app.use(express.json());
app.use('/lights', lightRoutes);
app.use('/celestial-bodies', celestialBodyRoutes);
app.use('/plants', plantRoutes);
app.use('/animals', animalRoutes);
app.use('/humans', humanRoutes);
app.use('/institutions', institutionRoutes);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('Connected to MongoDB');
    app.listen(3000, () => { // Changed from 3000 to 3001
      console.log('Server is up on port 3000');
    });
  } catch (err) {
    console.error('Connection error', err);
  }
}

main();
