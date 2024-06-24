const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: String,
  type: String,
  characteristics: [String],
  dayOfCreation: Number,
  createdDate: { type: Date, default: Date.now }
}, { versionKey: false });

// Method to return the sound of the animal based on its type
animalSchema.methods.sound = function () {
  const sounds = {
    dog: `Woof Woof, I am a ${this.name}`,
    cat: `Meow Meow, I am a ${this.name}`,
    cow: `Moo Moo, I am a ${this.name}`,
    sheep: `Baa Baa, I am a ${this.name}`,
    bird: `Tweet Tweet, I am a ${this.name}`,
    lion: `Roar Roar, I am a ${this.name}`,
    elephant: `Trumpet Trumpet, I am a ${this.name}`,
    horse: `Neigh Neigh, I am a ${this.name}`,
    pig: `Oink Oink, I am a ${this.name}`,
    chicken: `Cluck Cluck, I am a ${this.name}`,
    duck: `Quack Quack, I am a ${this.name}`,
    frog: `Ribbit Ribbit, I am a ${this.name}`,
    goat: `Bleat Bleat, I am a ${this.name}`,
    default: `I am a ${this.name}`
  };

  return sounds[this.type.toLowerCase()] || sounds.default;
};

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
