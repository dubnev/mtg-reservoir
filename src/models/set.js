const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SetSchema = new Schema({
  code: { type: String, unique: true },
  name: String,
  block: String
});

mongoose.model('Set', SetSchema);