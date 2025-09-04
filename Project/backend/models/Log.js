const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  date: { type: String, required: true },
  mood: { type: String, required: true },
  notes: { type: String }
});

module.exports = mongoose.model('Log', logSchema);
