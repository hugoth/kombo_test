const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
  id: Number, // mongoose generate a random ID, no use to set a required statement to this ID
  name: { type: String, required: true },
  country: { type: String, required: true },
  locale: { type: String, required: true, default: "fr" },
  // fixing default local statement to handle conditional rendering on autocompletion searching
  translation_city: {
    es: { type: String, required: true },
    fr: { type: String, required: true },
    it: { type: String, required: true },
    en: { type: String, required: true }
  },
  translation_country: {
    es: { type: String, required: true },
    fr: { type: String, required: true },
    it: { type: String, required: true },
    en: { type: String, required: true }
  },
  coordinates: {
    lat: { type: Number, required: true },
    lon: { type: Number, required: true }
  },
  stations: { type: Array, required: true }
});

CitySchema.index({
  name: "text"
});
module.exports = CitySchema;
