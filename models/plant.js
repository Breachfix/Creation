const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: String,
  type: String,
  characteristics: [String],
  dayOfCreation: Number,
  createdDate: { type: Date, default: Date.now }
}, { versionKey: false });

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
