const mongoose = require('mongoose');

const lightSchema = new mongoose.Schema({
  name: String,
  description: String,
  characteristics: [String],
  dayOfCreation: Number,
  createdDate: { type: Date, default: Date.now }
}, { versionKey: false });

const Light = mongoose.model('Light', lightSchema);

module.exports = Light;
