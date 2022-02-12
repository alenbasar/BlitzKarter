const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('Cards', CardSchema);
