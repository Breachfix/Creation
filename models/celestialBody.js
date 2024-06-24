const mongoose = require('mongoose');

const celestialBodySchema = new mongoose.Schema({
  name: String,
  type: String,
  characteristics: [String],
  dayOfCreation: Number,
  createdDate: { type: Date, default: Date.now }
}, { versionKey: false });

const CelestialBody = mongoose.model('CelestialBody', celestialBodySchema);

module.exports = CelestialBody;
