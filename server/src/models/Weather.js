const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
  city: String,
  date: Date,
  temperature: Number,
  description: String,
});

module.exports = mongoose.model('Weather', WeatherSchema);
