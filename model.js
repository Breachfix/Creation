const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: String,
  colour: String,
  age: Number,
  type: String,
  createdDate: { type: Date, default: Date.now() }
}, { versionKey: false });

animalSchema.methods.bark = function () {
  return this.name ? `Woof Woof, I am a ${this.name}` : 'I am a dog';
};

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
