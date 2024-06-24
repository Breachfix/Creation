const mongoose = require('mongoose');

const institutionsSchema = new mongoose.Schema({
  name: String,
  description: String,
  dayOfCreation: Number,
  createdDate: { type: Date, default: Date.now }
}, { versionKey: false });

const Institutions = mongoose.model('Institutions', institutionsSchema);

module.exports = Institutions;
