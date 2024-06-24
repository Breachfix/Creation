const mongoose = require('mongoose');

const humanSchema = new mongoose.Schema({
  name: String,
  characteristics: [String],
  dayOfCreation: Number,
  createdDate: { type: Date, default: Date.now }
}, { versionKey: false });

const Human = mongoose.model('Human', humanSchema);

module.exports = Human;
