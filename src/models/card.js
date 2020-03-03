const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardSchema = new mongoose.Schema({
  colorIdentity: { type: [String], index: true },
  convertedManaCost: { type: Number, index: true },
  hasFoil: Boolean,
  hasNonFoil: Boolean,
  isPromo: Boolean,
  isReserved: Boolean,
  manaCost: String,
  name: { type: String, index: true },
  printings: [String],
  rarity: String,
  uuid: { type: String, unique: true },
  type: String,
  types: [String],
  multiverseId: Number
});

mongoose.model('Card', CardSchema);
